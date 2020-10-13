import BookmarkIcon from "../icons/BookmarkFilledIcon";

const BookmarkedModuleCard: React.FC = () => {
    const dummyModuleCodes: string[] = [
        "CS1101s", "CS2030", "CS2040", "CS1231", "CS3219"
    ];

    const renderModuleCodes = () => dummyModuleCodes.map(moduleCode => {
        return (
            <div style={styles.moduleCode}>
                {moduleCode}
            </div>
        );
    });

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                    <BookmarkIcon style={{ ...styles.actionIcon }}/>
                    Bookmarked Modules
            </div>
            <div style={styles.moduleList}>
                {renderModuleCodes()}
            </div>
        </div>

    );
};

const styles = {
    moduleCode: {
        padding: 12,
        backgroundColor: "#2D538C",
        color: "#fff",
        borderRadius: 15,
        boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
        marginRight: 10
    },
    moduleList : {
        display:"flex",
        flexDirection:"row",
        justifyContent: "flex-start",
    },
    container: {
        padding: 30,
        backgroundColor: "#289FA7",
        color: "#fff",
        borderRadius: 15,
        boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
        marginBottom: 15
      },
    header: {
        display: "flex",
        justifyContent: "flex-start",
        fontSize: 20,
        textDecorationLine: "underline",
        fontWeight: "bold",
        alignItems: "center",
        margin: "-5px 0px 10px 0px"
    },
    actionIcon: {
        height: 20,
        marginRight: 10,
        color: "#fff"
    }, 

};

export default BookmarkedModuleCard;



