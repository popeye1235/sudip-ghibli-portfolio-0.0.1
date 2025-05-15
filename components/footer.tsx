
"use client";

import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

interface VersionInfo {
  version: string;
  lastUpdated: string;
}

const Footer = () => {
  const [version, setVersion] = useState<VersionInfo | null>(null);

  useEffect(() => {
    fetch("/version.json")
      .then((res) => res.json())
      .then((data) => setVersion(data))
      .catch((err) => console.error("Failed to load version info", err));
  }, []);

  const formatDateTime = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <footer className="py-10 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6 mb-6">
            <a
              href="mailto:sudipmishraofficial@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://github.com/popeye1235"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/sudip-mishra-11b93013a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/babumosai_23/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://x.com/babumosai_23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={22} />
            </a>
          </div>

          {/* Line and Text */}
          <Separator className="mb-6 max-w-md mx-auto" />
          <div className="text-center space-y-2">
            <p className="font-medium">
              <span className="text-primary">Sudip </span>Mishra
            </p>
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} All rights reserved.
            </p>
            {version && (
              <p className="text-xs text-muted-foreground">
                v{version.version} — Last updated: {formatDateTime(version.lastUpdated)}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

