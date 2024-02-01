export default function PageNotFound() {
    return (
        <>
        <div className="flex flex-col justify-center items-center mt-40">
            <h2 className="text-[32px] text-center">Owh, seems like something happened, either try refreshing the page or go back.</h2>
            <img src="/assets/404.svg" alt="404 not found"></img>
        </div>
        </>
    )
}