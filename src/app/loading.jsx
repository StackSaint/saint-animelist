const Loading = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-b from-cyberpunk-primary to-cyberpunk-primary/95 backdrop-blur-sm z-50">
            <div className="flex flex-col items-center gap-6">
                <div className="loading"></div>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-cyberpunk-accent animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-cyberpunk-accent animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-cyberpunk-accent animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <p className="text-cyberpunk-accent font-semibold text-sm tracking-widest">Loading anime...</p>
            </div>
        </div>
    )
}

export default Loading