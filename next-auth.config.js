import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Google({
      clientId: "TU_CLIENT_ID",
      clientSecret: "TU_CLIENT_SECRET",
    }),
    // Otros proveedores de autenticación
  ],
  // Otras opciones de configuración
};

export default NextAuth(options);