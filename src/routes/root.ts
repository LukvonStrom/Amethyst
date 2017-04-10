/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
 'use strict';
// Test routes
import { Router } from 'express';
import { deliverSlogan } from '../controllers/RootController';

let router = Router();
router.get('/', deliverSlogan);

export = router;
