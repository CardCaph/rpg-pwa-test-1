Game_CharacterBase.prototype.isTransparent = function() {
    return this._transparent == false ? this._fogTransparent : this._transparent;
};