export function Paragraph ({children}){
    return<p
    className="
    antialiased
    text-content
    my-3
    "
    >{children}</p>
}
export function TitleDwarf ({children}){
    return <h5 className="title-dwarf">{children}</h5>
}
export function HumanTitle ({children}){
    return <h3 className="mb-6 title-human">{children}</h3>
}