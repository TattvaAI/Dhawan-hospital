"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { 
  Activity, 
  Bone, 
  HeartPulse, 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  Pill, 
  Zap, 
  Syringe, 
  Ambulance, 
  MessageCircle,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionTitle from "@/components/site/SectionTitle";

const servicesList = [
  {
    id: "orthopaedics",
    icon: Bone,
    title: "Orthopaedics",
    tagline: "Dedicated Bone, Joint & Spine Excellence",
    overview: [
      "Orthopaedics is a specialized branch of medicine dedicated to diagnosing, treating, preventing, and rehabilitating conditions affecting the bones, joints, muscles, ligaments, tendons, and spine. At Dhawan Healthcare Group, we believe that healthy bones and joints are essential for maintaining an active and pain-free lifestyle.",
      "Our orthopaedic specialists provide comprehensive care for patients of all age groups, whether they are suffering from fractures, arthritis, sports injuries, joint pain, back pain, or complex musculoskeletal disorders. Every patient undergoes a detailed consultation, physical examination, and advanced diagnostic evaluation before a personalized treatment plan is created."
    ],
    details: [
      "Our approach always begins with conservative treatment whenever possible. This may include medications, physiotherapy, lifestyle modifications, pain management techniques, and minimally invasive procedures. If surgery becomes necessary, our experienced surgeons utilize modern surgical techniques and advanced technology to ensure precision, safety, and faster recovery.",
      "We are committed to helping patients regain mobility, reduce pain, restore function, and return to their daily activities with confidence. From emergency trauma cases to elective joint replacement surgeries, our multidisciplinary team ensures compassionate care throughout every stage of treatment.",
      "Patient education, rehabilitation, and long-term follow-up remain an important part of our treatment philosophy. By combining clinical expertise with advanced technology, we strive to deliver outstanding orthopaedic care tailored to every individual's needs."
    ],
    highlights: [
      "Comprehensive care for all age groups",
      "Conservative-first treatment approach",
      "Advanced diagnostic evaluation & imaging",
      "Modern surgical precision & technology",
      "Patient education & long-term follow-up"
    ],
    badge: "Primary Department",
    color: "from-blue-500/25 to-gold/10"
  },
  {
    id: "trauma-care",
    icon: ShieldCheck,
    title: "Trauma Care",
    tagline: "Immediate Emergency Response & Fracture Stabilization",
    overview: [
      "Traumatic injuries require immediate medical attention, accurate diagnosis, and rapid treatment to prevent complications and save lives. Our Trauma Care Department provides 24×7 emergency services for patients suffering from road accidents, falls, workplace injuries, sports injuries, and other serious emergencies.",
      "Our trauma team consists of experienced orthopaedic surgeons, emergency physicians, anesthetists, radiologists, and nursing professionals who work together to stabilize patients as quickly as possible. Upon arrival, patients undergo rapid assessment, emergency imaging, and comprehensive evaluation to determine the severity of their injuries."
    ],
    details: [
      "Treatment may include fracture stabilization, wound management, emergency surgeries, internal fixation procedures, soft tissue reconstruction, and critical post-operative monitoring. Every step is carefully coordinated to minimize complications and maximize recovery outcomes.",
      "Advanced operation theatres, modern diagnostic equipment, and intensive care support allow us to manage both simple and highly complex trauma cases efficiently. Once the patient is stabilized, a structured rehabilitation program is initiated to restore mobility, strength, and independence.",
      "Our mission is to provide timely intervention, compassionate care, and comprehensive rehabilitation that enables patients to recover safely and return to normal life as quickly as possible."
    ],
    highlights: [
      "24×7 emergency response & triage",
      "Multidisciplinary trauma specialist team",
      "Advanced operating theatres & ICU support",
      "Rapid diagnostic imaging on arrival",
      "Structured post-stabilization rehabilitation"
    ],
    badge: "24x7 Emergency",
    color: "from-red-500/20 to-gold/10"
  },
  {
    id: "fracture-treatment",
    icon: Syringe,
    title: "Fracture Treatment",
    tagline: "Advanced Bone Healing & Anatomical Alignment",
    overview: [
      "Fractures can occur due to accidents, sports injuries, falls, osteoporosis, or other medical conditions. Our Fracture Treatment services are designed to provide accurate diagnosis, effective treatment, and complete rehabilitation for all types of bone injuries.",
      "Every patient undergoes a detailed clinical assessment followed by advanced imaging such as X-rays or other investigations to determine the type, location, and severity of the fracture. Based on the findings, our specialists recommend the most appropriate treatment approach."
    ],
    details: [
      "Simple fractures are often treated using casts, splints, or braces to ensure proper bone alignment during healing. Complex fractures may require minimally invasive procedures or surgical fixation using plates, screws, rods, or external fixation devices.",
      "Our experienced surgeons focus on restoring normal bone anatomy while minimizing pain and promoting faster healing. Throughout the recovery process, patients receive personalized rehabilitation programs, physiotherapy guidance, nutritional advice, and regular follow-up evaluations.",
      "By combining modern surgical techniques with evidence-based rehabilitation protocols, we help patients regain strength, mobility, and confidence while reducing the risk of long-term complications."
    ],
    highlights: [
      "Precise clinical assessment & advanced imaging",
      "Casting, splinting, and bracing for simple fractures",
      "Minimally invasive & surgical fixation (plates/screws/rods)",
      "Personalized rehab, physiotherapy, and nutritional advice",
      "Evidence-based alignment & recovery protocols"
    ],
    badge: "Specialized Care",
    color: "from-emerald-500/20 to-gold/10"
  },
  {
    id: "joint-replacement",
    icon: Activity,
    title: "Joint Replacement",
    tagline: "World-Class Hip & Knee Replacement Surgery",
    overview: [
      "Joint replacement surgery is an advanced procedure designed to relieve chronic pain, restore movement, and improve quality of life for patients suffering from severe arthritis or damaged joints.",
      "Our specialists perform detailed evaluations using clinical examination, digital imaging, and functional assessments before recommending surgery. We ensure that joint replacement is considered only after conservative treatment options have been exhausted."
    ],
    details: [
      "The procedure involves replacing damaged joint surfaces with high-quality prosthetic implants designed to replicate natural movement. We specialize in hip replacement, knee replacement, and revision joint replacement surgeries using modern surgical techniques and precision technology.",
      "Following surgery, patients receive structured rehabilitation programs, physiotherapy sessions, pain management support, and regular clinical follow-up. Early mobilization and guided exercises play a significant role in ensuring successful recovery.",
      "Our objective is to help patients walk comfortably, reduce pain, restore independence, and return to their daily routine with improved mobility and confidence."
    ],
    highlights: [
      "Hip, knee, and revision replacement specialties",
      "Detailed functional & digital imaging assessments",
      "High-quality prosthetic implants for natural motion",
      "Early mobilization & post-surgical physiotherapy",
      "Relief from severe arthritis & chronic joint pain"
    ],
    badge: "Elite Surgery",
    color: "from-sky-500/20 to-gold/10"
  },
  {
    id: "spine-care",
    icon: Stethoscope,
    title: "Spine Care",
    tagline: "Non-Surgical & Minimally Invasive Spine Solutions",
    overview: [
      "The spine supports the body's movement, posture, and nervous system. Disorders affecting the spine can significantly impact daily life, causing pain, numbness, weakness, or reduced mobility.",
      "Our Spine Care services focus on diagnosing and treating conditions such as slipped discs, spinal stenosis, sciatica, scoliosis, degenerative spine diseases, fractures, and chronic back pain."
    ],
    details: [
      "Each patient receives a comprehensive clinical evaluation along with advanced imaging to identify the exact cause of symptoms. Treatment plans are individualized based on age, medical condition, lifestyle, and severity of the disorder.",
      "Whenever possible, non-surgical management including physiotherapy, medications, posture correction, spinal injections, and rehabilitation is recommended. If surgery becomes necessary, minimally invasive techniques are used whenever appropriate to reduce recovery time and improve outcomes.",
      "Our multidisciplinary approach ensures comprehensive care aimed at relieving pain, restoring function, improving posture, and enhancing overall quality of life."
    ],
    highlights: [
      "Treating slipped discs, stenosis, sciatica, and scoliosis",
      "Comprehensive clinical & imaging diagnostics",
      "Conservative-first approach (physio, posture, injections)",
      "Minimally invasive spinal surgeries when required",
      "Restoring posture, mobility, and nervous system health"
    ],
    badge: "Advanced Tech",
    color: "from-indigo-500/20 to-gold/10"
  },
  {
    id: "sports-injury",
    icon: HeartPulse,
    title: "Sports Injury",
    tagline: "Returning Athletes Safely & Quickly to Peak Performance",
    overview: [
      "Sports injuries can affect athletes as well as individuals engaged in regular physical activities. Prompt diagnosis and appropriate treatment are essential to prevent long-term complications and restore peak performance.",
      "We treat ligament injuries, tendon tears, muscle strains, meniscus injuries, shoulder instability, ACL injuries, cartilage damage, ankle sprains, and overuse injuries."
    ],
    details: [
      "Every patient undergoes a thorough physical examination, movement assessment, and diagnostic imaging when required. Based on the diagnosis, an individualized treatment plan is developed.",
      "Treatment may include physiotherapy, regenerative therapies, arthroscopic surgery, rehabilitation exercises, strength training, and injury prevention strategies.",
      "Our goal is to ensure safe healing, restore strength, improve flexibility, and help patients confidently return to sports and daily activities without compromising long-term joint health."
    ],
    highlights: [
      "Advanced treatment for ACL, meniscus, and ligament tears",
      "Thorough physical exams & movement assessments",
      "Physiotherapy & regenerative therapy options",
      "Arthroscopic (minimally invasive) joint surgery",
      "Injury prevention & athletic strength training"
    ],
    badge: "Sports Medicine",
    color: "from-purple-500/20 to-gold/10"
  },
  {
    id: "physiotherapy",
    icon: Sparkles,
    title: "Physiotherapy",
    tagline: "Advanced Movement & Pain Rehabilitation",
    overview: [
      "Physiotherapy plays a vital role in restoring movement, reducing pain, improving flexibility, and enhancing overall physical function. It supports recovery after surgery, injury, neurological disorders, and chronic musculoskeletal conditions.",
      "Our physiotherapists perform comprehensive assessments to identify movement limitations, muscle weakness, posture issues, and functional impairments before designing a customized rehabilitation program."
    ],
    details: [
      "Treatment may include manual therapy, dry needling, electrotherapy, strengthening exercises, balance training, posture correction, gait training, and mobility enhancement techniques.",
      "Regular progress evaluations allow treatment plans to be modified according to patient recovery. Education regarding posture, home exercises, ergonomics, and injury prevention forms an integral part of therapy.",
      "We focus on helping patients regain independence, improve quality of life, and achieve long-term physical wellness."
    ],
    highlights: [
      "Manual therapy, dry needling, and electrotherapy",
      "Comprehensive posture & movement assessments",
      "Gait training and mobility enhancement",
      "Customized exercise and ergonomics education",
      "Ideal for post-op, post-injury, and chronic conditions"
    ],
    badge: "Dhawan Physio Centre",
    color: "from-amber-500/20 to-gold/10"
  },
  {
    id: "rehabilitation",
    icon: Zap,
    title: "Rehabilitation",
    tagline: "Restoring Strength, Mobility & Independence",
    overview: [
      "Rehabilitation is an essential component of recovery following surgery, injury, neurological illness, or prolonged hospitalization. Our comprehensive rehabilitation programs aim to restore strength, mobility, independence, and confidence.",
      "Every rehabilitation journey begins with a detailed functional assessment conducted by our multidisciplinary team. Individualized recovery plans are then developed according to the patient's physical abilities, medical condition, and recovery goals."
    ],
    details: [
      "Programs include physiotherapy, occupational therapy, mobility training, balance exercises, pain management, strengthening exercises, and functional skill development.",
      "Regular monitoring ensures steady progress while reducing the risk of complications or re-injury. Patients receive continuous encouragement and education throughout the recovery process.",
      "Our rehabilitation services help individuals safely return to work, sports, daily activities, and independent living with improved physical function and overall well-being."
    ],
    highlights: [
      "Post-surgical, post-injury, and post-hospitalization rehab",
      "Detailed functional assessments by MD team",
      "Physiotherapy & occupational therapy integration",
      "Work & sports re-entry preparation",
      "Continuous progress monitoring & re-injury prevention"
    ],
    badge: "Recovery Focused",
    color: "from-pink-500/20 to-gold/10"
  },
  {
    id: "pain-management",
    icon: Pill,
    title: "Pain Management",
    tagline: "Multi-Modal & Minimally Invasive Relief",
    overview: [
      "Chronic pain can significantly impact physical health, emotional well-being, and overall quality of life. Our Pain Management services are focused on identifying the underlying cause of pain and providing personalized treatment solutions.",
      "We manage joint pain, back pain, neck pain, arthritis, nerve pain, sports injuries, post-surgical pain, and chronic musculoskeletal disorders using evidence-based approaches."
    ],
    details: [
      "Following a comprehensive evaluation, treatment may include medications, image-guided injections, nerve blocks, physiotherapy, regenerative therapies, lifestyle modifications, and rehabilitation.",
      "Our specialists emphasize minimally invasive procedures whenever appropriate, helping patients achieve effective pain relief while reducing dependence on long-term medications.",
      "Through comprehensive assessment, advanced interventions, and multidisciplinary care, we aim to improve comfort, restore function, and enhance overall quality of life."
    ],
    highlights: [
      "Evidence-based care for chronic back, neck, and joint pain",
      "Image-guided spinal/joint injections and nerve blocks",
      "Minimally invasive options to reduce medication reliance",
      "Multidisciplinary approach to find root cause of pain",
      "Tailored lifestyle modifications and rehab"
    ],
    badge: "Interventional",
    color: "from-teal-500/20 to-gold/10"
  },
  {
    id: "emergency-care",
    icon: Ambulance,
    title: "Emergency Care",
    tagline: "Round-the-Clock Orthopaedic & Trauma Support",
    overview: [
      "Medical emergencies require immediate attention, rapid decision-making, and coordinated treatment. Our Emergency Care Department operates 24 hours a day to provide prompt medical assistance for trauma, fractures, severe pain, accidents, infections, and other urgent conditions.",
      "Upon arrival, patients undergo immediate triage, vital assessment, emergency investigations, and stabilization by experienced emergency physicians and orthopaedic specialists."
    ],
    details: [
      "Advanced diagnostic facilities, modern operation theatres, and critical care support enable timely diagnosis and effective treatment for both minor and life-threatening emergencies.",
      "Our team works efficiently to ensure rapid intervention, continuous monitoring, and seamless transition to specialized care whenever required.",
      "With compassion, expertise, and advanced medical infrastructure, we remain committed to delivering high-quality emergency healthcare that prioritizes patient safety, timely treatment, and optimal recovery outcomes."
    ],
    highlights: [
      "24/7/365 availability for acute trauma and emergencies",
      "Immediate triage & specialized orthopaedic assessment",
      "On-site advanced diagnostics & modern ORs",
      "Continuous monitoring & critical care integration",
      "Seamless path to specialized surgical teams"
    ],
    badge: "Always Open",
    color: "from-rose-500/25 to-gold/10"
  }
];

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("orthopaedics");

  // Load initial tab from search params (if present)
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      const match = servicesList.find((s) => s.id === tabParam);
      if (match) {
        setActiveTab(match.id);
      }
    }
  }, [searchParams]);

  // Handle manual tab switching and URL update
  const handleTabSelect = (id: string) => {
    setActiveTab(id);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", id);
    window.history.pushState({}, "", url.pathname + url.search);
  };

  const selectedService = servicesList.find((s) => s.id === activeTab) || servicesList[0];
  const ActiveIcon = selectedService.icon;

  return (
    <>
      {/* Premium Hero Section */}
      <section className="py-24 grad-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,oklch(0.7_0.1_80/0.1),transparent_40%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <Reveal direction="down">
            <span className="inline-flex items-center gap-1.5 glass rounded-full px-4.5 py-1.5 text-xs tracking-widest uppercase text-gold font-bold mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> Dhawan Healthcare Group
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight text-gradient">
              Specialised Services
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Every procedure is performed in accordance with international protocols, employing modern equipment and senior surgical expertise. From your initial consultation to complete functional recovery, we guide your care path step-by-step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Services Interactive Workspace */}
      <section className="py-12 pb-24 relative z-20 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar Menu (Scrollable Pills on mobile, Vertical Stack on desktop) */}
            <div className="lg:col-span-4 sticky top-24 z-10 flex flex-col gap-4">
              <div className="glass rounded-3xl p-5 border border-border/80 shadow-elegant">
                <div className="text-xs uppercase tracking-widest text-gold font-bold mb-4 hidden lg:block px-3">
                  Departments & Care Paths
                </div>
                
                {/* Scrollable list container */}
                <div className="flex flex-row overflow-x-auto lg:flex-col gap-2 pb-2 lg:pb-0 scrollbar-none snap-x">
                  {servicesList.map((service) => {
                    const ServiceIcon = service.icon;
                    const isActive = service.id === activeTab;
                    return (
                      <button
                        key={service.id}
                        onClick={() => handleTabSelect(service.id)}
                        className={`flex items-center gap-3.5 px-4.5 py-3 lg:py-3.5 rounded-2xl transition-all duration-300 snap-center shrink-0 text-left border cursor-pointer ${
                          isActive
                            ? "bg-primary text-primary-foreground border-gold/40 shadow-glow"
                            : "glass border-transparent hover:border-gold/25 hover:bg-card/50 text-foreground/80 hover:text-foreground"
                        }`}
                      >
                        <div className={`p-2 rounded-xl transition-all ${
                          isActive 
                            ? "bg-gold text-gold-foreground" 
                            : "bg-gold/10 text-gold"
                        }`}>
                          <ServiceIcon className="h-4.5 w-4.5" />
                        </div>
                        <div className="flex-1 lg:block">
                          <div className="text-sm font-semibold tracking-wide whitespace-nowrap lg:whitespace-normal">
                            {service.title}
                          </div>
                          <div className={`text-[10px] hidden lg:block mt-0.5 ${
                            isActive ? "text-primary-foreground/75" : "text-muted-foreground"
                          }`}>
                            {service.badge}
                          </div>
                        </div>
                        
                        {isActive && (
                          <motion.div 
                            layoutId="active-indicator" 
                            className="hidden lg:block w-1.5 h-1.5 rounded-full bg-gold" 
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Instant Help Card */}
              <div className="hidden lg:block glass rounded-3xl p-6 border border-border/80 shadow-elegant bg-gradient-to-br from-gold/5 to-primary/5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Need Immediate Help?</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Emergency Triage is active 24/7</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/40 flex flex-col gap-2">
                  <a href="tel:01712662953" className="flex items-center justify-between text-xs font-semibold px-3 py-2 rounded-xl bg-card border border-border hover:border-gold/30 transition-colors">
                    <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-gold" /> Call Desk: 0171-2662953</span>
                    <ArrowRight className="h-3 w-3 text-gold" />
                  </a>
                  <a href="https://maps.app.goo.gl/y9aW5YwX9F8jDk2B8" target="_blank" rel="noreferrer" className="flex items-center justify-between text-xs font-semibold px-3 py-2 rounded-xl bg-card border border-border hover:border-gold/30 transition-colors">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold" /> Ambala, Haryana</span>
                    <ArrowRight className="h-3 w-3 text-gold" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Detailed Panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="glass rounded-3xl p-6 md:p-10 border border-border/80 shadow-elegant relative overflow-hidden"
                >
                  {/* Decorative background glow based on category color */}
                  <div className={`absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${selectedService.color} blur-3xl opacity-60 pointer-events-none`} />

                  <div className="relative z-10">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-border/40">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-gold/25 to-primary/10 border border-gold/30 text-gold flex items-center justify-center shadow-glow">
                          <ActiveIcon className="h-7 w-7" />
                        </div>
                        <div>
                          <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-gold bg-gold/15 px-2.5 py-0.5 rounded-full mb-1">
                            {selectedService.badge}
                          </span>
                          <h2 className="font-display text-2xl md:text-4.5xl font-bold leading-none">
                            {selectedService.title}
                          </h2>
                        </div>
                      </div>
                      
                      {/* Subtitle / Tagline */}
                      <div className="text-right text-xs md:text-sm font-semibold text-gold tracking-wide italic">
                        {selectedService.tagline}
                      </div>
                    </div>

                    {/* Overview Paragraphs */}
                    <div className="space-y-4 text-sm md:text-base text-foreground/95 leading-relaxed">
                      {selectedService.overview.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>

                    {/* Detailed Medical Information Block */}
                    <div className="mt-8 pt-8 border-t border-border/40 grid md:grid-cols-12 gap-8">
                      
                      {/* Left: Detailed Text Column */}
                      <div className="md:col-span-7 space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <h4 className="text-xs uppercase tracking-widest text-gold font-bold">Clinical Care & Treatment Philosophy</h4>
                        {selectedService.details.map((detailPara, dIdx) => (
                          <p key={dIdx} className="text-foreground/90">{detailPara}</p>
                        ))}
                      </div>

                      {/* Right: Bulleted Highlights Grid */}
                      <div className="md:col-span-5 glass rounded-2xl p-5.5 border border-border/40 bg-card/10 h-fit">
                        <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Key Features & Services</h4>
                        <div className="space-y-3.5">
                          {selectedService.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                              <span className="text-xs md:text-sm text-foreground/90 font-medium leading-tight">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Action Block / CTA */}
                    <div className="mt-10 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-6 bg-gradient-to-r from-gold/5 to-transparent p-5 rounded-2xl border border-gold/10">
                      <div className="max-w-md">
                        <h4 className="text-sm font-bold text-foreground">Consult with Dhawan Specialists</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Click below to start booking an appointment. You can coordinate dates, consult fees, and availability directly with our desk.
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/919812038750?text=${encodeURIComponent(
                          `Hello, I would like to book a consultation for the ${selectedService.title} department.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold flex items-center gap-2 hover:scale-[1.03] transition-transform shadow-elegant cursor-pointer w-full md:w-auto justify-center"
                      >
                        <MessageCircle className="h-4.5 w-4.5 fill-current" />
                        <span>Book {selectedService.title} Appointment</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
