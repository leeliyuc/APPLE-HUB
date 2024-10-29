let url = $request.url;
if (!url.includes("&include_adult=true")) {
    url += "&include_adult=true";  // Add the parameter if it's not already present
}
$done({url: url});  // Return the modified URL