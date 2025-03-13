"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function PricingSection() {
  const [annual, setAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      price: annual ? "$99" : "$9",
      period: annual ? "/year" : "/month",
      description: "Perfect for individuals and small projects",
      features: ["5 projects", "10GB storage", "Basic analytics", "Email support", "Community access"],
      notIncluded: ["Custom domains", "Advanced analytics", "Priority support"],
      popular: false,
      buttonVariant: "outline" as const,
    },
    {
      name: "Pro",
      price: annual ? "$299" : "$29",
      period: annual ? "/year" : "/month",
      description: "Ideal for growing teams and businesses",
      features: [
        "Unlimited projects",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom domains",
        "Team collaboration",
      ],
      notIncluded: ["Dedicated account manager"],
      popular: true,
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      price: annual ? "$999" : "$99",
      period: annual ? "/year" : "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited everything",
        "500GB storage",
        "Custom analytics",
        "24/7 support",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
      ],
      notIncluded: [],
      popular: false,
      buttonVariant: "outline" as const,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white dark flex flex-col items-center">
      <motion.div
        className="w-full max-w-7xl px-4 py-16 md:py-24 mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Choose the perfect plan for your needs. No hidden fees.
          </motion.p>

          <motion.div
            className="flex items-center justify-center mt-8 space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Label htmlFor="billing-toggle" className={!annual ? "font-medium text-white" : "text-zinc-400"}>
              Monthly
            </Label>
            <Switch id="billing-toggle" checked={annual} onCheckedChange={setAnnual} />
            <Label htmlFor="billing-toggle" className={annual ? "font-medium text-white" : "text-zinc-400"}>
              Annual <span className="text-xs text-primary">(Save 20%)</span>
            </Label>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card
                className={`h-full relative flex flex-col bg-zinc-900 ${plan.popular ? "border-primary shadow-lg" : "border-zinc-800"}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className={plan.popular ? "pt-8" : ""}>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">What&apos;s included:</h4>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}

                      {plan.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-start text-muted-foreground">
                          <X className="h-4 w-4 mr-2 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant={plan.buttonVariant} className="w-full">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16 text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p>All plans include a 14-day free trial. No credit card required.</p>
          <p className="mt-2">
            Need a custom plan?{" "}
            <a href="#" className="text-primary underline underline-offset-4">
              Contact us
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

