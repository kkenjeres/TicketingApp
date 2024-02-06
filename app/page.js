import Image from "next/image";
import TicketCard from "./TicketCard";
export default function Home() {
  return (
    <main className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </main>
  );
}
