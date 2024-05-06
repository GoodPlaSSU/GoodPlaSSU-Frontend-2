interface Params {
    menu: String;
}

const ContentHeader = ({ menu }: Params) => {
    return (
        <div className="flex w-[100%] h-11 items-center gap-4 text-lg font-bold text-zinc-800">
            <span className="pl-11">GoodPlassu</span>
            <span>{menu}</span>
        </div>
    );
};

export default ContentHeader;
