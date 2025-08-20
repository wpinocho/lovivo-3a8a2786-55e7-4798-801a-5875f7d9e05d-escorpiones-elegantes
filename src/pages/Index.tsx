import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Zap, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const scorpions = [
    {
      id: 1,
      name: "Emperor Scorpion",
      scientificName: "Pandinus imperator",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rarity: "Premium",
      venom: "Low",
      size: "20cm",
      description: "El emperador de los escorpiones africanos. Majestuoso y poderoso.",
      features: ["Pinzas gigantes", "Brillo natural", "Temperamento dócil"]
    },
    {
      id: 2,
      name: "Deathstalker",
      scientificName: "Leiurus quinquestriatus",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rarity: "Ultra Rare",
      venom: "Extreme",
      size: "12cm",
      description: "El más letal y codiciado. Solo para coleccionistas expertos.",
      features: ["Veneno potente", "Agilidad extrema", "Coloración dorada"]
    },
    {
      id: 3,
      name: "Fat-Tailed Scorpion",
      scientificName: "Androctonus australis",
      price: 549,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rarity: "Rare",
      venom: "High",
      size: "15cm",
      description: "Cola robusta y presencia imponente del desierto africano.",
      features: ["Cola característica", "Resistencia extrema", "Comportamiento nocturno"]
    },
    {
      id: 4,
      name: "Dictator Scorpion",
      scientificName: "Pandinus dictator",
      price: 449,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rarity: "Premium",
      venom: "Medium",
      size: "18cm",
      description: "Dominante y elegante, perfecto para colecciones exclusivas.",
      features: ["Caparazón brillante", "Movimientos fluidos", "Longevidad excepcional"]
    }
  ];

  const addToCart = (scorpion: any) => {
    setCartItems(prev => prev + 1);
    toast.success(`${scorpion.name} añadido al carrito`, {
      description: `Precio: $${scorpion.price}`,
    });
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Ultra Rare": return "bg-gradient-to-r from-purple-600 to-pink-600";
      case "Rare": return "bg-gradient-to-r from-red-600 to-orange-600";
      case "Premium": return "bg-gradient-to-r from-yellow-600 to-amber-600";
      default: return "bg-gradient-to-r from-gray-600 to-gray-700";
    }
  };

  const getVenomColor = (venom: string) => {
    switch (venom) {
      case "Extreme": return "text-red-500";
      case "High": return "text-orange-500";
      case "Medium": return "text-yellow-500";
      case "Low": return "text-green-500";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-900/20"></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #dc2626 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #7c3aed 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="relative z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-purple-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <Zap className="h-8 w-8 text-purple-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            SCORPION ELITE
          </h1>
        </motion.div>
        
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="outline" className="bg-black/50 border-purple-500/50 text-white hover:bg-purple-500/20">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Carrito ({cartItems})
          </Button>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        className="relative z-10 px-6 py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h2 
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-red-400 to-yellow-400 bg-clip-text text-transparent"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          ESCORPIONES
        </motion.h2>
        <motion.h3 
          className="text-4xl md:text-6xl font-bold mb-8 text-red-400"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          AFRICANOS
        </motion.h3>
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Colección exclusiva de los escorpiones más letales y exóticos del continente africano. 
          Cada espécimen es una obra maestra de la naturaleza.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="flex items-center space-x-2 text-purple-400">
            <Shield className="h-6 w-6" />
            <span className="text-lg">Certificación Premium</span>
          </div>
          <div className="flex items-center space-x-2 text-red-400">
            <Award className="h-6 w-6" />
            <span className="text-lg">Colección Exclusiva</span>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="h-6 w-6" />
            <span className="text-lg">Calidad Suprema</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Products Grid */}
      <motion.section 
        className="relative z-10 px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h3 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            CATÁLOGO EXCLUSIVO
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scorpions.map((scorpion, index) => (
              <motion.div
                key={scorpion.id}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-black/60 border-purple-500/30 backdrop-blur-md hover:border-red-500/50 transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={scorpion.image} 
                      alt={scorpion.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <Badge className={`absolute top-3 right-3 ${getRarityColor(scorpion.rarity)} text-white border-0`}>
                      {scorpion.rarity}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                      {scorpion.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400 italic">
                      {scorpion.scientificName}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-300">{scorpion.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-400">Veneno:</span>
                        <span className={`ml-1 font-semibold ${getVenomColor(scorpion.venom)}`}>
                          {scorpion.venom}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400">Tamaño:</span>
                        <span className="ml-1 text-white">{scorpion.size}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      {scorpion.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-400">
                          <Star className="h-3 w-3 mr-1 text-yellow-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-400">${scorpion.price}</span>
                        <span className="text-sm text-gray-500 line-through">${scorpion.originalPrice}</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                        -{Math.round(((scorpion.originalPrice - scorpion.price) / scorpion.originalPrice) * 100)}%
                      </Badge>
                    </div>
                    
                    <motion.div className="w-full">
                      <Button 
                        onClick={() => addToCart(scorpion)}
                        className="w-full bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white border-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Añadir al Carrito
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="relative z-10 mt-20 p-8 text-center border-t border-purple-500/20 bg-black/50 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p className="text-gray-400 mb-2">© 2024 Scorpion Elite - Colección Exclusiva de Escorpiones Africanos</p>
        <p className="text-sm text-gray-500">Solo para coleccionistas expertos • Certificación internacional</p>
      </motion.footer>
    </div>
  );
};

export default Index;