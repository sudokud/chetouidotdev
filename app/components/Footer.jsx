import LastVisit from "./LastVisit";

export default function Footer () {
return (
    <footer className="copyright"> 
        <div className="flex justify-center">
            <h6 className="text-gray-500">
            <LastVisit/>
            </h6>
        </div>
    </footer>
)
}