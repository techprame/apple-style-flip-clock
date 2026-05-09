import FlipClock from "@/components/ui/flip-clock";

export default function Home() {
  // function to display today's date.
  const date = new Date();
  const day = date.getDate();
  const ordinal = (n: number) => {
    const v = n % 100;
    if (v >= 11 && v <= 13) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();
  const formattedDate = `${day}${ordinal(day)} ${month}, ${year}`;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* make the clock container relative so we can absolutely position the date */}
      <div className="relative border-4 px-5 py-10 rounded-2xl bg-black">
        <FlipClock size="xl" />

        {/* positioned bottom-right so it appears under the seconds column */}
        <div className="absolute my-3 right-6 text-sm text-zinc-200 dark:text-zinc-300">
          {formattedDate}
        </div>
      </div>
    </div>
  );
}
