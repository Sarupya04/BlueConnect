const Status = ({ text }) => {
  if (!text) return null;
  const isError = text.toLowerCase().includes("error");
  return (
    <p className={`text-center font-bold text-lg ${isError ? "text-red-500" : "text-green-600"}`}>
      {text}
    </p>
  );
};

export default Status;
