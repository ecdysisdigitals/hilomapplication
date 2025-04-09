"use client"

import { Download, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  // MediaFire APK download link
  const apkDownloadLink = "https://www.mediafire.com/file/u50f8quph8xxk0l/Hilom.apk/file"

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-green-800 to-green-900 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative">
        {/* Background animated elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-green-500/10 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-green-500/10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-green-500/10 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="flex flex-col md:flex-row items-center justify-center h-full">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            {/* Logo */}
            <div className="mb-8 flex justify-center md:justify-start animate-float">
              <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="HILOM Logo"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center md:text-left animate-slideUp"
              style={{ animationDelay: "0.2s" }}
            >
              HILOM: Gamot sa Bicol
            </h1>
            <p
              className="text-lg text-green-100 mb-8 text-center md:text-left animate-slideUp"
              style={{ animationDelay: "0.4s" }}
            >
              I-download ang HILOM app ngayon at tuklasin ang mga tradisyunal na lunas at halamang gamot mula sa rehiyon
              ng Bicol. Ang kaalaman ng ating mga ninuno, nasa iyong kamay na.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slideUp"
              style={{ animationDelay: "0.6s" }}
            >
              <Link href={apkDownloadLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-white text-green-800 hover:bg-green-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" /> I-download ang APK
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10 transition-all duration-300"
                onClick={() => {
                  // This would open a modal with QR code in a real implementation
                  alert("Scan QR code to download directly to your phone")
                }}
              >
                <QrCode className="mr-2 h-5 w-5" /> QR Code
              </Button>
            </div>

            <p
              className="text-white/70 mt-4 text-sm text-center md:text-left animate-slideUp"
              style={{ animationDelay: "0.8s" }}
            >
              *Para sa Android devices lamang
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center animate-slideIn" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-64 h-[500px] bg-black rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-12 bg-black flex items-center justify-center">
                <div className="w-20 h-6 bg-black rounded-b-xl"></div>
              </div>
              <div className="w-full h-full bg-gradient-to-b from-green-700 to-green-900 pt-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center mb-4 animate-pulse">
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
