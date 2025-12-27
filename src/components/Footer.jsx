export default function Footer() {
  return (
    <footer className="w-full text-center py-4 text-sm text-gray-500 border-t mt-10">
      <p>
        © {new Date().getFullYear()} RU SmartOps • Rishihood University • Built for Impact
      </p>
      <p className="text-xs mt-1">Version 1.0.0</p>
    </footer>
  );
}
