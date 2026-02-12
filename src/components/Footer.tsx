const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-heading text-sm text-foreground">
          Portfolio<span className="text-primary">.</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
