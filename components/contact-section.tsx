"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/xqapwdya', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setFormStatus('error');
    }

    // Auto-dismiss popup after 5 seconds
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xl text-primary font-medium">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Let&apos;s Work Together</h3>
            <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold">Contact Information</h4>
                <p className="text-muted-foreground text-lg">
  Whether it’s a whisper of collaboration or a friendly hello carried on the wind — I’m open to new journeys. My lantern 🏮 is lit for both freelance paths and full-time adventures.
</p>

              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <a href="mailto:sudipmishraofficial@gmail.com" className="text-lg hover:text-primary transition-colors">
                  sudipmishraofficial@gmail.com
                  </a>
                </div>

                <div className="flex gap-3 pt-4">
                  <a href="https://github.com/popeye1235" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                      <Github size={18} />
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/sudip-mishra-11b93013a/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                      <Linkedin size={18} />
                    </Button>
                  </a>
                  <a href="https://x.com/babumosai_23" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                      <Twitter size={18} />
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/babumosai_23/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                  <Instagram size={18} />
                </Button>
              </a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold">Send a Message</h4>
                <p className="text-muted-foreground">
                  Have a question or want to work together? Send me a message!
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="min-h-[120px] rounded-md"
                    required
                  />
                  <Button type="submit" className="w-full rounded-md">Send Message</Button>
                </div>
              </form>

              {/* Popups with Ghibli style feel */}
              {formStatus === 'success' && (
                <div className="bg-primary/10 border border-primary text-primary p-4 rounded-md animate-in fade-in slide-in-from-top-5 duration-500 shadow-lg shadow-primary/20">
                  ✅ Thank you! Your message was sent successfully.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-destructive/10 border border-destructive text-destructive p-4 rounded-md animate-in fade-in slide-in-from-top-5 duration-500 shadow-md shadow-destructive/20">
                  ❌ Oops! Something went wrong. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
