'use client'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>Hello from My Next.js Package</h1>
      </motion.div>
    </main>
  )
}
