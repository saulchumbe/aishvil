"use client";

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.001 2.667c-7.363 0-13.334 5.97-13.334 13.333 0 2.352.616 4.66 1.788 6.688l-1.897 6.928a1 1 0 0 0 1.226 1.226l6.928-1.897a13.29 13.29 0 0 0 6.688 1.788h.001c7.363 0 13.334-5.97 13.334-13.334S23.364 2.667 16.001 2.667zm7.802 18.85c-.33.928-1.63 1.71-2.65 1.93-.705.15-1.626.27-4.724-1.014-3.965-1.643-6.52-5.663-6.717-5.925-.19-.262-1.61-2.144-1.61-4.09 0-1.945 1.02-2.9 1.383-3.297.33-.36.72-.45.96-.45.24 0 .48.003.69.014.222.011.518-.084.81.618.33.79 1.12 2.734 1.22 2.933.1.2.166.435.033.697-.132.263-.198.427-.395.657-.198.23-.417.513-.596.69-.198.196-.404.408-.174.798.23.39 1.022 1.685 2.194 2.73 1.508 1.344 2.78 1.76 3.17 1.958.39.198.618.165.845-.1.23-.263.99-1.153 1.253-1.548.264-.396.528-.33.885-.198.362.132 2.297 1.084 2.69 1.28.396.198.66.297.757.462.098.165.098.952-.23 1.877z" />
    </svg>
  );
}

const WHATSAPP_NUMERO = "59176387609";

export default function WhatsAppFloat() {
  return (
    <a href={"https://wa.me/" + WHATSAPP_NUMERO} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105">
      <WhatsAppIcon width={30} height={30} />
    </a>
  );
}
