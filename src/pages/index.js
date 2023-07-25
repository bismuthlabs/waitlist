import Header from "@/components/header";
import Head from "next/head";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  
  const calculateTimeLeft = () => {
    const eventDate = new Date("2023-07-30"); // Replace this with your target date
    const now = new Date();
    const difference = eventDate - now;

    if (difference > 0) {
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      console.log(eventDate);
      setTimeLeft({ hours, minutes, seconds });
    } else {
      setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
    }
  };

  // useEffect(() => {
  //   const timer = setInterval(calculateTimeLeft, 1000);

  //   return () => clearInterval(timer);
  // }, []);



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Waitlist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`body { overflow: hidden; }`}</style>
      </Head>

      <>
        <div>
          <Header />
        </div>
        <main className={inter.className} style={{ backgroundImage: "url('https://images.nationalgeographic.org/image/upload/v1638890315/EducationHub/photos/amazon-river-basin.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
        <div className="z-50" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "#fff", width: "300px" }}>
            {/* <p className="mt-2 text-xs mb-2">Think you've seen it all? <br /> Think again!</p> */}
            <h1 className="text-lg uppercase font-bold">We are building the largest footwear catalog</h1>
            <p className="text-sm mt-2">Don't be limited by converntional styles.</p>

            {/* <div style={{ fontSize: "24px", marginTop: "20px" }} className="flex gap-3 items-center justify-center">
              <div className="flex gap-2 flex-col items-center">
                <div className="bg-blue-600 rounded-full w-14 h-14 flex justify-center items-center text-base font-semibold">
                  {timeLeft.hours}
                </div>
                <p className="text-sm">Hours</p>
              </div>
              <div className="flex gap-2 flex-col items-center">
                <div className="bg-blue-600 rounded-full w-14 h-14 flex justify-center items-center text-base font-semibold">
                {timeLeft.minutes}
                </div>
                <p className="text-sm">Minutes</p>
              </div>
              <div className="flex gap-2 flex-col items-center">
                <div className="bg-blue-600 rounded-full w-14 h-14 flex justify-center items-center text-base font-semibold">
                  {timeLeft.seconds}
                </div>
                <p className="text-sm">Seconds</p>
              </div>
            </div> */}
            {/* <h2 className="mt-4 bg-slate-950 p-2">
              5 days left
            </h2> */}

            <form style={{ marginTop: "30px" }} className="flex flex-col gap-1">
                {/* <Input type="name" placeholder="Your name" className="rounded-none text-white font-medium bg-transparent placeholder:text-slate-300" /> */}
                <Input type="number" placeholder="Enter phone number" className="rounded-none text-white font-medium bg-transparent placeholder:text-slate-300" />
              <button type="submit" className="w-full bg-white text-black p-2 capitalize text-sm font-medium mt-2 ">
                Get early access
              </button>
            </form>
          </div>
          <div style={{ position: "absolute", top: 48, left: 0, width: "100%", height: "1000px", background: "rgba(0, 0, 0, 0.5)" }}></div>
        </main>
      </>
    </>
  );
}