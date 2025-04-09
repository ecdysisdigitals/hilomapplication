import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-900 flex items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* Logo */}
            <div className="mb-8 flex justify-center md:justify-start">
              <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="HILOM Logo"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center md:text-left">
              HILOM: Gamot sa Bicol
            </h1>
            <p className="text-lg text-green-100 mb-8 text-center md:text-left">
              I-download ang HILOM app ngayon at tuklasin ang mga tradisyunal na lunas at halamang gamot mula sa rehiyon
              ng Bicol. Ang kaalaman ng ating mga ninuno, nasa iyong kamay na.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-green-800 hover:bg-green-100">
                <Download className="mr-2 h-5 w-5" /> I-download ang APK
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-[500px] bg-black rounded-3xl overflow-hidden border-8 border-gray-800">
              <div className="absolute top-0 left-0 w-full h-12 bg-black flex items-center justify-center">
                <div className="w-20 h-6 bg-black rounded-b-xl"></div>
              </div>
              <div className="w-full h-full bg-green-700 pt-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="HILOM Icon"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl">HILOM</h3>
                  <p className="text-white/70 mt-2">Tradisyunal na Gamot sa Bicol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
