export function Button({ children, onClick, className = "", variant = "default", size = "md" }) {
    const base =
      "inline-flex items-center justify-center px-4 py-2 font-medium rounded-md transition-all";
  
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      ghost: "bg-transparent text-inherit hover:bg-gray-100 dark:hover:bg-gray-800",
    };
  
    const sizes = {
      md: "text-sm",
      icon: "text-lg w-10 h-10 p-0",
    };
  
    return (
      <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
        {children}
      </button>
    );
  }
  