import { createOpenAI } from '@ai-sdk/openai';
import { streamText, convertToModelMessages } from 'ai';

const SYSTEM_PROMPT =
  'You are the digital concierge for Dhawan Orthopaedic Hospital (Phone: 0171 266 2953, Address: H.No :-1, Arya Nagar, Ambala Cantt). Answer FAQs about orthopedics, our services (Toe Orthosis, Knee/Hip Replacement, Eye Orthoptics, Orthopedic Surgery). Do not diagnose. Always encourage booking an appointment. Be concise and friendly.';

export async function POST(req: Request) {
  const apiKey = process.env.NVIDIA_NIM_API_KEY;

  if (!apiKey) {
    return new Response(
      'Hello! I\'m the Dhawan Orthopaedic Hospital concierge. For questions or to book an appointment, please call us at 0171 266 2953.',
      { status: 200, headers: { 'Content-Type': 'text/plain' } }
    );
  }

  try {
    const { messages } = await req.json();

    const nvidia = createOpenAI({
      baseURL: 'https://integrate.api.nvidia.com/v1',
      apiKey,
    });

    // AI SDK v6: convert UI messages → model messages, then stream
    const modelMessages = await convertToModelMessages(messages);

    const result = streamText({
      model: nvidia('meta/llama3-70b-instruct'),
      system: SYSTEM_PROMPT,
      messages: modelMessages,
    });

    // toUIMessageStreamResponse() is the v6 replacement for toDataStreamResponse()
    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error('Chat API error:', err);
    return new Response('Service temporarily unavailable. Please call 0171 266 2953.', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}
