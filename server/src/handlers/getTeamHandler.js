const getTeamController =require("../controlers/team/getTeamController")

const getTeamHandler = async (req, res) =>{
    try {
        const result = await getTeamController();
        return res.status(200).json(result);
        
    } catch (error) {
        res.status(400).json({error: error.message});
        
    }
}
module.exports = getTeamHandler;       