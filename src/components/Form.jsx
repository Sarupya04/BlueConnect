import { useState } from "react";
import Status from "./Status";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const handleShare = async () => {
    const data = JSON.stringify({ name, phone }, null, 2);

    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [
          {
            name: "vivo Y100",
            services: ["0000ffe0-0000-1000-8000-00805f9b34fb"],
          },
        ],
      });

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService(
        "0000ffe0-0000-1000-8000-00805f9b34fb"
      );
      const characteristic = await service.getCharacteristic(
        "0000ffe1-0000-1000-8000-00805f9b34fb"
      );

      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(data);
      await characteristic.writeValue(dataBuffer);

      setStatus("Data sent successfully!");
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <main className="w-full md:w-1/2 px-5 flex flex-col justify-center">
      <h2 className="text-purple-800 text-center text-2xl font-bold mb-4">
        USER DETAILS
      </h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-full md:w-4/5">
          <label className="text-purple-800 font-semibold">Name</label>
          <input
            type="text"
            value={name}
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="w-full md:w-4/5">
          <label className="text-purple-800 font-semibold">Phone</label>
          <input
            type="tel"
            value={phone}
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button
          onClick={handleShare}
          className="bg-white text-purple-800 border border-purple-800 px-5 py-2 rounded-md hover:bg-purple-800 hover:text-white transition"
        >
          Share
        </button>
        <Status text={status} />
      </div>
    </main>
  );
};

export default Form;
