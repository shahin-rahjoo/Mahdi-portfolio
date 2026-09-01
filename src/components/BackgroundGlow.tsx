const BackgroundGlow = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] right-[-10%] sm:right-[15%] w-[15vw] h-[10vw] min-w-30 min-h-20 bg-muted-foreground rounded-full opacity-25 blur-[70px]"></div>
            <div className="absolute bottom-[10%] left-[-15%] sm:left-[2%] w-[15vw] h-[10vw] min-w-30 min-h-20 bg-muted-foreground rounded-full opacity-25 blur-[70px]"></div>
        </div>
    );
};

export default BackgroundGlow;
