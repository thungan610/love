import React, { useState, useEffect } from "react";
import "./love.css";

export default function Love() {
  const [showDetails, setShowDetails] = useState(false);
  const [daysTogether, setDaysTogether] = useState(0);
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const startDate = new Date("2024-07-06");
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDaysTogether(diffDays);
  }, []);

  const handleClick = () => {
    setShowDetails(true);
  };

  const allImages = [
    "https://i.postimg.cc/63gGB6h4/d.jpg",
    "https://i.postimg.cc/zDkrm2X8/a12.jpg",
    "https://i.postimg.cc/NfJvFyHn/a11.jpg",
    "https://i.postimg.cc/qvWfc9QX/a9.jpg",
    "https://i.postimg.cc/63NDgnk8/a8.jpg",
    "https://i.postimg.cc/GtL6hrhr/a7.jpg",
    "https://i.postimg.cc/Y0dZvVhF/a6.jpg",
    "https://i.postimg.cc/nV26Ss0L/a5.jpg",
    "https://i.postimg.cc/yYN2MVby/a4.jpg",
    "https://i.postimg.cc/sgQq2TyB/a3.jpg",
      "https://i.postimg.cc/0ywXvrdD/a2.jpg",
        "https://i.postimg.cc/NMppDXBq/a1.jpg",
          "https://i.postimg.cc/pr3QcYS7/a13.jpg",
            "https://i.postimg.cc/FsJVd8dQ/a14.jpg",
              "https://i.postimg.cc/vZFLWhfx/a15.jpg",
                "https://i.postimg.cc/yNnmCz50/a16.jpg",
                  "https://i.postimg.cc/W4p9kSc6/a17.jpg",
                    "https://i.postimg.cc/wMNFpGDH/a18.jpg",
                      "https://i.postimg.cc/65sY0BNQ/a20.jpg",
                        "https://i.postimg.cc/RZdd4fJ3/a22.jpg",
                          "https://i.postimg.cc/rppJmm5f/a23.jpg",
                            "https://i.postimg.cc/ZRBx8M73/a24.jpg",
                              "https://i.postimg.cc/nrqK5Qth/a25.jpg",
                                "https://i.postimg.cc/7YynzXgG/a26.jpg",
                                  "https://i.postimg.cc/fTKm9szp/a27.jpg",
                                    "https://i.postimg.cc/dVNC59T9/a28.jpg",
                                      "https://i.postimg.cc/8CF69rRg/a29.jpg",
                                        "https://i.postimg.cc/yNwZHYjg/a30.jpg",
                                          "https://i.postimg.cc/QCDKF4Rj/a31.jpg",
                                            "https://i.postimg.cc/P5Jpv8Fv/a32.jpg",
                                              
  ];

  const groupSize = 5;
  const totalGroups = Math.ceil(allImages.length / groupSize);

  useEffect(() => {
    if (!showDetails) return;
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups);
    }, 5000);
    return () => clearInterval(interval);
  }, [showDetails, totalGroups]);

  const currentImages = allImages.slice(
    currentGroup * groupSize,
    (currentGroup + 1) * groupSize
  );

  return (
    <div className="love-container">
      <ul className="falling-flowers">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i}>🌸</li>
        ))}
      </ul>

      <div
        className={`heart ${showDetails ? "heart-active" : ""}`}
        onClick={handleClick}
        title="Click để xem điều bất ngờ"
      >
        ❤️
      </div>

      {showDetails && (
        <>
          <div className="days-text">
            <span>{daysTogether} ngày</span> 💖
          </div>

          <div className="gallery">
            {currentImages.map((img, index) => {
              const top = Math.random() * 80 + "%";
              const left = Math.random() * 80 + "%";
              const delay = Math.random() * 2 + "s";
              const duration = Math.random() * 8 + 8 + "s";

              return (
                <img
                  key={index}
                  src={img}
                  alt={`love-${index}`}
                  style={{
                    top,
                    left,
                    animationDelay: delay,
                    animationDuration: duration,
                  }}
                  className="floating-image"
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
