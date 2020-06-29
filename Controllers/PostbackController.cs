using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace meetings_poc.Controllers
{
    [Route("api/[controller]")]
    public class PostbackController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public string Get()
        {
            return Request.QueryString.ToString();
        }

        [HttpGet]
        [Route("webex")]
        public string WebexAuthPostback(string code)
        {
            return code;
        }
    }
}
