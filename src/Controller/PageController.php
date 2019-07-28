<?php
/**
 * @author Rix Beck <rix@neologik.hu>
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class PageController
 */
class PageController extends AbstractController
{
    public function page($page, Request $request)
    {
        return $this->render($page.'.html.twig', compact('page', 'request'));
    }
}
