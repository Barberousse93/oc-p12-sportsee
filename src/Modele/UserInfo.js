export class UserInfos {
    id 
    userInfos
    score
    todayScore
    keyData

    constructor(data){
        this.userInfos={}
        this.keyData={}

        if (data && data.id){
            this.id = data.id
        } else {
            this.id = 0
        }
        if (data && data.userInfos && data.userInfos.firstName ){
            this.userInfos.firstName=data.userInfos.firstName
        } else {
            this.userInfos.firstName="XXX"
        }
        if (data && data.userInfos && data.userInfos.lastName ){
            this.userInfos.lastName=data.userInfos.lastName
        } else {
            this.userInfos.lastName="YYYY"
        }
        if (data && data.userInfos && data.userInfos.age ){
            this.userInfos.age=data.userInfos.age
        } else {
            this.userInfos.age=99
        }
        if (data && data.score){
            this.score = data.score
        } else {
            this.score = 0
        }
        if (data && data.todayScore){
            this.todayScore = data.todayScore
        } else {
            this.todayScore = 0
        }
        if (data && data.keyData && data.keyData.calorieCount ){
            this.keyData.calorieCount=data.keyData.calorieCount
        } else {
            this.keyData.calorieCount=0
        }
        if (data && data.keyData && data.keyData.proteinCount ){
            this.keyData.proteinCount=data.keyData.proteinCount
        } else {
            this.keyData.proteinCount=0
        }
        if (data && data.keyData && data.keyData.carbohydrateCount ){
            this.keyData.carbohydrateCount=data.keyData.carbohydrateCount
        } else {
            this.keyData.carbohydrateCount=0
        }
        if (data && data.keyData && data.keyData.lipidCount ){
            this.keyData.lipidCount=data.keyData.lipidCount
        } else {
            this.keyData.lipidCount=0
        }
    }
}
