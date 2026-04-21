import Image from "next/image";

const exchanges = [
  { name: "Binance", logo: "/exchanges/binance.jpg", scale: 1 },
  { name: "OKX", logo: "/exchanges/okx.png", scale: 1 },
  { name: "Coinbase", logo: "/exchanges/coinbase.png", scale: 2 },
  { name: "KuCoin", logo: "/exchanges/kucoin.png", scale: 1 },
  { name: "Bybit", logo: "/exchanges/bybit.png", scale: 1 },
  { name: "BingX", logo: "/exchanges/bingx.png", scale: 1 },
  { name: "Kraken", logo: "/exchanges/kraken.png", scale: 1.5 },
  { name: "Gate.io", logo: "/exchanges/gateio.png", scale: 1 },
  { name: "Crypto.com", logo: "/exchanges/cryptocom.jpg", scale: 1.5 },
  { name: "HTX", logo: "/exchanges/htx.png", scale: 1 },
  { name: "BitMart", logo: "/exchanges/bitmart.png", scale: 1 },
  { name: "Bitget", logo: "/exchanges/bitget.png", scale: 1 },
  { name: "MEXC Global", logo: "/exchanges/mexc.png", scale: 0.67 },
  { name: "Upbit", logo: "/exchanges/upbit.jpg", scale: 1.5 },
  { name: "BitMEX", logo: "/exchanges/bitmex.png", scale: 0.67 },
  { name: "bitbank", logo: "/exchanges/bitbank.png", scale: 1 },
  { name: "Bitrue", logo: "/exchanges/bitrue.png", scale: 1 },
];

export default function LogoTicker() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-white py-4">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="animate-marquee flex shrink-0 items-center">
        {[0, 1].flatMap((copy) =>
          exchanges.map((exchange) => (
            <div
              key={`${copy}-${exchange.name}`}
              className="mr-24 flex shrink-0 items-center justify-center opacity-70 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={exchange.logo}
                alt={exchange.name}
                width={600}
                height={64}
                priority
                className="w-auto max-h-16 object-contain"
                style={{ height: `${32 * exchange.scale}px` }}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
