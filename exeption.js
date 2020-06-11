function error(x, y) {
    try {
        z = x + y
    }
    catch (e) {
        throw new error(e)
    }
    finally{
        return z
    }
}