module.exports = function (data){
    return this.json({
        [this.config('errnoField')]: this.config('successCode') || 200,
        data
    });
}