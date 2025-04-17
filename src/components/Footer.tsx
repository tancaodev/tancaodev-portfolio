import React from 'react'

const Footer: React.FC = () => {
  console.log('Footer rendered')
  return (
    <footer className="container mx-auto py-8 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Designed & Built by TanCaoDev
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
