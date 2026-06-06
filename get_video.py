import urllib.request
import re

try:
    req = urllib.request.Request("https://www.youtube.com/@TRADEPULSE-n7p/videos", headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    video_id = re.search(r'"videoId":"([^"]+)"', html)
    if video_id:
        print('Video ID:', video_id.group(1))
    else:
        print('Not found')
except Exception as e:
    print('Error:', e)
