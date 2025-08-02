import bcrypt from 'bcrypt';
import * as dal from '../dal/players.dal.js';
import { Response } from '../utils/generalUtils.js';
import { isInvalid, isTooShort } from '../utils/generalUtils.js';
import { HTTP_STATUS } from '../utils/generalUtils.js';
import {login} from '../auth/auth.js';


export async function addPlayerController(req, res) {
    let response = new Response();

    try {
        const { name, password } = req.body;
        const {token} = req.headers.authorization;

        if (isInvalid(name)) {
            response.error = true;
            response.message = "Name is required and must be a non-empty string.";
            return res.status(HTTP_STATUS.BAD_REQUEST).send(response);
        }
        if (isInvalid(password, "string") || isTooShort(password, "string", 4)) {
            response.error = true;
            response.message = "Password is required and must be at least 4 characters.";
            return res.status(HTTP_STATUS.BAD_REQUEST).send(response);
        }

        if (!token) {}
        const hashedPassword = await bcrypt.hash(password, 10);
        response = await dal.addPlayer(name, hashedPassword);

        if (response.error) {
            const status = HTTP_STATUS.CONFLICT;
            return res.status(status).send(response);
        }

        return res.status(HTTP_STATUS.CREATED).send(response);

    } catch (error) {
        response.error = true;
        response.message = error.message;
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(response);
    }
}


export async function loginPlayerController(req, res) {
    
    let response = new Response();
    try {
        const { name, password } = req.params;

        if (isInvalid(name) || isInvalid(password, "string")) {
            response.error = true;
            response.message = "Name and password are required. Password must be at least 4 characters.";
            return res.send(response);
        }

        response = await dal.getPlayerByName(name);

        if (response.error) {
            return res.send(response);
        }

        const player = response.content;
        const isPasswordMatch = await bcrypt.compare(password, player.hashed_password);

        if (!isPasswordMatch) {
            response.error = true;
            response.message = "Password or name does not match.";
            response.content = null;
        }

        return res.send(response);

    } catch (error) {
        response.error = true;
        response.message = error.message;
        response.content = null;
        return res.send(response);
    }
}

export async function getTopTenController(req, res) {
 
    let response = new Response();
    
    try {
    response = await dal.getTopTen();
    return res.send(response);
 
    } catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response)
    }
}

export async function updateBestTimeController(req, res) {
   
    let response = new Response();
    try {
    const {id, best_time} = req.body;
    response = await dal.updateBestTime(id, best_time);      
    return res.send(response);
 
    } catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response)
    }
}
