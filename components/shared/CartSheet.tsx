"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingCart, CheckCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useUIStore } from "@/lib/store";

type Bezier = [number, number, number, number];
const ease: Bezier = [0.22, 1, 0.36, 1];

export function CartSheet() {
  const { cartOpen, setCartOpen } =
    useUIStore();
  const [ordered, setOrdered] = useState(false);

//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   const handleOrder = () => {
//     setOrdered(true);
//     setTimeout(() => {
//       setOrdered(false);
//       clearCart();
//       setCartOpen(false);
//     }, 2800);
//   };

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent
        side="right"
        className="flex flex-col w-full sm:max-w-md bg-kampung-cream border-l border-kampung-rattan/20 p-0"
        showCloseButton={false}
      >

      </SheetContent>
    </Sheet>
  );
}
