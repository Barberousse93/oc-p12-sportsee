export class AverageSessions {
    userId
    sessions

    constructor(data){
        this.sessions = []

        if(data && data.sessions && data.sessions.length){
            for (let i = 0; i < data.sessions.length; i++){
                this.sessions.push({
            day:0,
            sessionLength: 0
        })
            }
        }
        
        if (data && data.userId){
            this.userId = data.userId
        } else {
            this.userId = 0
        }

        for (let i=0;i<this.sessions.length;i++){
            if(data && data.sessions && data.sessions[i].day){
                this.sessions[i].day=data.sessions[i].day
            } else {
                this.sessions[i].day=0
            }
            if(data && data.sessions && data.sessions[i].sessionLength){
                this.sessions[i].sessionLength=data.sessions[i].sessionLength
            } else {
                this.sessions[i].sessionLength=0
            }
        }
    }

}