import { Metadata } from "next";
import RightDietClient from "./RightDietClient";

export const metadata: Metadata = {
  title: "Right Diet & Smart Nutrition - Roveeta Dhawan | Dhawan Healthcare",
  description: "Get personalised nutrition, weight loss programmes, and muscle gain plans designed around you. Free wellness, BMI, and calorie calculators from dietitian Roveeta Dhawan.",
  keywords: ["Right Diet", "Roveeta Dhawan", "Dietitian", "Nutritionist", "BMI Calculator", "Calorie Calculator", "Meal Calculator", "Weight Loss", "Dhawan Healthcare"],
};

export default function RightDietPage() {
  return <RightDietClient />;
}
