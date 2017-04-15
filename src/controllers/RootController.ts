/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
 'use strict';
import { Request, Response } from 'express';

/**
 * Root controller that provides a JSON message with a slogan as default page
 */
module RootController {
    'use strict';

  /*
   * Return an empty 200 response
   */
  export function deliverSlogan(req: Request, res: Response) {
    res.json({'Amethyst': 'Amethyst is a simple shop software designed especially for artists.'});
  }

}

export = RootController;
