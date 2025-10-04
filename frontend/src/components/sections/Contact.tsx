import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[url('@/assets/ContactBg.png')] bg-cover bg-center py-12 px-6 md:px-16 flex flex-col md:flex-row items-start justify-center gap-12">
      {/* Left Contact Info */}
      <div className="w-full md:w-1/3 space-y-4 z-10">
        <h4 className="text-xs uppercase text-gray-600 font-medium text-left">Contact</h4>
        <div className="flex items-center space-x-3">
          <Mail className="w-4 h-4 text-gray-700" />
          <span className="text-sm text-gray-800">church@email.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-4 h-4 text-gray-700" />
          <span className="text-sm text-gray-800">+251912233444</span>
        </div>
      </div>

      {/* Right Form */}
      <Card className="w-full md:w-1/2 shadow-none border-0 bg-transparent z-10">
        <CardContent className="p-0">
          <h2 className="text-xl font-semibold mb-4 text-left">Get in touch</h2>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" className="bg-white" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="example@email.com" type="email" className="bg-white" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here." rows={4} className="bg-white" />
            </div>

            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
