<div className="relative w-64 h-64">
          <img
            src="/myPro.jpg"
            alt="My Profile"
            className="w-40 h-40 rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />

          {/* Circular Text Around Picture */}

          <CircularText
            text="My*Success*Story*"
            onHover="goBonkers"
            spinDuration={20}
            className="absolute top-0 left-0 w-full h-full  flex items-center justify-center z-0"
          />
        </div>
