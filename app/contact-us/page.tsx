import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import NeonText from "@/components/NeonText";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
  className?: string;
}

const Contact7 = ({
  title = "Contact Us",
  description = "Contact the support team at Shadcnblocks.",
  emailLabel = "Email",
  emailDescription = "We respond to all emails within 24 hours.",
  email = "example@shadcnblocks.com",
  officeLabel = "Office",
  officeDescription = "Drop by our office for a chat.",
  officeAddress = "1 Eagle St, Brisbane, QLD, 4000",
  phoneLabel = "Phone",
  phoneDescription = "We're available Mon-Fri, 9am-5pm.",
  phone = "+123 456 7890",
  chatLabel = "Live Chat",
  chatDescription = "Get instant help from our support team.",
  chatLink = "Start Chat",
  className,
}: Contact7Props) => {
  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container">
        <div className="mb-14">
          <h1 className="mt-2 mb-3 text-3xl font-semibold text-balance md:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="mb-3 text-muted-foreground">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="mb-3 text-muted-foreground">{officeDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {officeAddress}
            </a>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="mb-3 text-muted-foreground">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MessageCircle className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{chatLabel}</p>
            <p className="mb-3 text-muted-foreground">{chatDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {chatLink}
            </a>
          </div>
        </div>
        <div className="mt-16 overflow-hidden rounded-lg border">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1091.38934508893!2d78.48007208901433!3d17.396127872710533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997eea5a2595%3A0x4f864f5f56e484cc!2sRAICHURI%20ARTS%20-%20ALTAF!5e0!3m2!1sen!2sin!4v1767869234257!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>
      </div>
    </section>
  );
};

const page = () => {
    return (<div className='pt-20 mx-15 md:mx-20 sm:mx-10'>
       
        <Contact7 email="raichuricommericalarts@gmail.com" 
        officeAddress="785/16, H.3-5, G/4, Hyderguda-Basheerbagh Rd, Shergate, Hyderabad, Telangana 500001" phone="+91 83091 89670"/></div>)
}

export default page;