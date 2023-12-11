export default function Home() {
  return (
    <>
      <div
        style={{
          background:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://4kwallpapers.com/images/walls/thumbs_3t/13542.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
        className="min-h-[75vh] flex flex-col gap-10 justify-center items-center"
      >
        <div className="absolute flex flex-col gap-3 justify-center items-center">
          <h1 className="text-6xl  text-white">Homepage</h1>
          <p className="text-3xl text-white">Welcome to the homepage</p>
        </div>
      </div>
    </>
  );
}
