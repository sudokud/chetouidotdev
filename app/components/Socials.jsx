import { Link } from "@remix-run/react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import ReadCVIcon from './ReadCvIcon'
export default function Socials () {
return (
    <aside className="w-dvw fixed flex justify-center bottom-11"> 
        <div className="flex justify-center">
            <Link className="mr-4" to={'https://read.cv/chetoui'}>
                <ReadCVIcon/>
            </Link>
            <Link className="mx-4" to={'https://github.com/sudokud'}>
                <GitHubLogoIcon color="#555" width={20} height={20} className="mt-1"/>
            </Link>
            <Link className="mx-4" to={'https://www.linkedin.com/in/hamza-chetoui/'}>
                <LinkedInLogoIcon color="#555" width={20} height={20} className="mt-1"/>
            </Link>
        </div>
    </aside>
)
}