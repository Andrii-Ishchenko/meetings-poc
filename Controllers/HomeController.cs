using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using meetings_poc.Models;

namespace meetings_poc.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Teams()
        {
            return View();
        }

        public IActionResult Webex(string code, string state)
        {
            if (!string.IsNullOrEmpty("code"))
            {
                ViewData["code"] = code;
            }

            if (!string.IsNullOrEmpty("state"))
            {
                ViewData["state"] = state;
            }

            return View();
        }

        public IActionResult Zoom()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
