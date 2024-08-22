type NavbarTabs = {
    [key: string]: { title: string; href: string };
  };
  
  const navbarTabs: NavbarTabs = {
    home: { title: "anasayfa", href: "/" },
  
    about: { title: "kategoriler", href: "/categories" },
  
    education: { title: "en çok satanlar", href: "/mostselling" },

  };
  
  export default navbarTabs;