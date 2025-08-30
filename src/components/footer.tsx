export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border/20">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {currentYear} Aakash Bhargava. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
