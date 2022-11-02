import HobbygroupCard from "./HobbygroupCard";

export default {
    title: "molecules/HobbygroupCard",
    component: HobbygroupCard,
};

export const Hobbygroup = () => {
    return (
    <HobbygroupCard 
        hobbyGroupName={"Folk som er glad i jul"}
        logoURL={"https://picsum.photos/100/100"}
        bannerColor="$red8"
        bannerImageURL={"https://picsum.photos/400/400"}
        >
        Interessegruppen for folk som er glad i jul er interessegruppen for, you guessed it, de som er glad i jul.
        Gruppens største formål er å spre julens glade budskap, samt spre juleglede når det måtte passe seg.
    </HobbygroupCard>
    )
};

export const HobbygroupWithColorBanner = () => {
    return (
    <HobbygroupCard 
        hobbyGroupName={"Folk som er glad i jul"}
        bannerColor="$red8"
        logoURL="http://placekitten.com/100/100"
        >
        Interessegruppen for folk som er glad i jul er interessegruppen for, you guessed it, de som er glad i jul.
        Gruppens største formål er å spre julens glade budskap, samt spre juleglede når det måtte passe seg.
    </HobbygroupCard>
    )
};

export const HobbygroupWithTestLink = () => {
    return (
    <HobbygroupCard 
        hobbyGroupName={"Folk som er glad i jul"}
        bannerColor="$red7"
        linkToWiki="https://www.google.com"
        >
        Interessegruppen for folk som er glad i jul er interessegruppen for, you guessed it, de som er glad i jul.
        Gruppens største formål er å spre julens glade budskap, samt spre juleglede når det måtte passe seg.
    </HobbygroupCard>
    )
}