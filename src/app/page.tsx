import Header from "@/components/Header";
import { Widget } from "@/components/Widget";
import { WidgetEvents } from "@/components/WidgetEvents";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div className="mt-10 flex min-h-screen flex-col items-center justify-between">
        <WidgetEvents />
        <Widget />
      </div>
      
    </main>
  );
}
