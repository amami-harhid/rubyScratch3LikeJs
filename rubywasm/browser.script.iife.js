/* # Notices for ruby.wasm

This product has binary distribution forms and they may contain third party material from the projects listed below.

## Ruby

https://www.ruby-lang.org/en/

### COPYING

```
Ruby is copyrighted free software by Yukihiro Matsumoto <matz@netlab.jp>.
You can redistribute it and/or modify it under either the terms of the
2-clause BSDL (see the file BSDL), or the conditions below:

1. You may make and give away verbatim copies of the source form of the
   software without restriction, provided that you duplicate all of the
   original copyright notices and associated disclaimers.

2. You may modify your copy of the software in any way, provided that
   you do at least ONE of the following:

   a. place your modifications in the Public Domain or otherwise
      make them Freely Available, such as by posting said
      modifications to Usenet or an equivalent medium, or by allowing
      the author to include your modifications in the software.

   b. use the modified software only within your corporation or
      organization.

   c. give non-standard binaries non-standard names, with
      instructions on where to get the original software distribution.

   d. make other distribution arrangements with the author.

3. You may distribute the software in object code or binary form,
   provided that you do at least ONE of the following:

   a. distribute the binaries and library files of the software,
      together with instructions (in the manual page or equivalent)
      on where to get the original distribution.

   b. accompany the distribution with the machine-readable source of
      the software.

   c. give non-standard binaries non-standard names, with
      instructions on where to get the original software distribution.

   d. make other distribution arrangements with the author.

4. You may modify and include the part of the software into any other
   software (possibly commercial).  But some files in the distribution
   are not written by the author, so that they are not under these terms.

   For the list of those files and their copying conditions, see the
   file LEGAL.

5. The scripts and library files supplied as input to or produced as
   output from the software do not automatically fall under the
   copyright of the software, but belong to whomever generated them,
   and may be sold commercially, and may be aggregated with this
   software.

6. THIS SOFTWARE IS PROVIDED "AS IS" AND WITHOUT ANY EXPRESS OR
   IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
   WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
   PURPOSE.
```


### LEGAL

```
= LEGAL NOTICE INFORMATION
--------------------------

All the files in this distribution are covered under either the Ruby's
license (see the file COPYING) or public-domain except some files
mentioned below.

[addr2line.c]

  A part of this file is from FreeBSD.

  >>>
    Copyright (c) 1986, 1988, 1991, 1993::
    The Regents of the University of California.  All rights reserved.

    (c) UNIX System Laboratories, Inc.

    All or some portions of this file are derived from material licensed
    to the University of California by American Telephone and Telegraph
    Co. or Unix System Laboratories, Inc. and are reproduced herein with
    the permission of UNIX System Laboratories, Inc.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.
    4. Neither the name of the University nor the names of its contributors
       may be used to endorse or promote products derived from this software
       without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

	@(#)subr_prf.c	8.3 (Berkeley) 1/21/94


[ccan/build_assert/build_assert.h]
[ccan/check_type/check_type.h]
[ccan/container_of/container_of.h]
[ccan/str/str.h]

  These files are licensed under the {CC0}[https://creativecommons.org/choose/zero/].

[ccan/list/list.h]

  This file is licensed under the {MIT License}[rdoc-label:label-MIT+License].

[coroutine]

  Unless otherwise specified, these files are licensed under the
  {MIT License}[rdoc-label:label-MIT+License].

[include/ruby/onigmo.h]
[include/ruby/oniguruma.h]
[regcomp.c]
[regenc.c]
[regenc.h]
[regerror.c]
[regexec.c]
[regint.h]
[regparse.c]
[regparse.h]
[enc/ascii.c]
[enc/big5.c]
[enc/cp949.c]
[enc/emacs_mule.c]
[enc/encdb.c]
[enc/euc_jp.c]
[enc/euc_kr.c]
[enc/euc_tw.c]
[enc/gb18030.c]
[enc/gb2312.c]
[enc/gbk.c]
[enc/iso_8859_1.c]
[enc/iso_8859_10.c]
[enc/iso_8859_11.c]
[enc/iso_8859_13.c]
[enc/iso_8859_14.c]
[enc/iso_8859_15.c]
[enc/iso_8859_16.c]
[enc/iso_8859_2.c]
[enc/iso_8859_3.c]
[enc/iso_8859_4.c]
[enc/iso_8859_5.c]
[enc/iso_8859_6.c]
[enc/iso_8859_7.c]
[enc/iso_8859_8.c]
[enc/iso_8859_9.c]
[enc/koi8_r.c]
[enc/koi8_u.c]
[enc/shift_jis.c]
[enc/unicode.c]
[enc/us_ascii.c]
[enc/utf_16be.c]
[enc/utf_16le.c]
[enc/utf_32be.c]
[enc/utf_32le.c]
[enc/utf_8.c]
[enc/windows_1251.c]
[enc/windows_31j.c]

  Onigmo (Oniguruma-mod) LICENSE

  >>>
    Copyright (c) 2002-2009::  K.Kosako  <sndgk393 AT ybb DOT ne DOT jp>
    Copyright (c) 2011-2014::  K.Takata  <kentkt AT csc DOT jp>
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

  Oniguruma LICENSE

  >>>
    Copyright (c) 2002-2009::  K.Kosako  <sndgk393 AT ybb DOT ne DOT jp>
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

  * https://github.com/k-takata/Onigmo/
  * https://github.com/kkos/oniguruma
  * https://svnweb.freebsd.org/ports/head/devel/oniguruma/

    When this software is partly used or it is distributed with Ruby,
    this of Ruby follows the license of Ruby.

[enc/windows_1250.c]
[enc/windows_1252.c]

  >>>
    Copyright (c) 2006-2007::  Byte      <byte AT mail DOT kna DOT ru>
                               K.Kosako  <sndgk393 AT ybb DOT ne DOT jp>
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

[enc/cesu_8.c]
[enc/windows_1253.c]
[enc/windows_1254.c]
[enc/windows_1257.c]

  >>>
    Copyright (c) 2002-2007::  K.Kosako  <sndgk393 AT ybb DOT ne DOT jp>
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

[enc/trans/GB/GB12345%UCS.src]
[enc/trans/GB/UCS%GB12345.src]
[enc/trans/GB/GB2312%UCS.src]
[enc/trans/GB/UCS%GB2312.src]

  These files have this explanatory texts.

  >>>
    This mapping data was created from files provided by Unicode, Inc.
    (The Unicode Consortium). The files were used to create a product supporting
    Unicode, as explicitly permitted in the files' copyright notices.
    Please note that Unicode, Inc. never made any claims as to fitness of these
    files for any particular purpose, and has ceased to publish the files many
    years ago.

[enc/trans/JIS/JISX0201-KANA%UCS.src]
[enc/trans/JIS/JISX0208\@1990%UCS.src]
[enc/trans/JIS/JISX0212%UCS.src]
[enc/trans/JIS/UCS%JISX0201-KANA.src]
[enc/trans/JIS/UCS%JISX0208@1990.src]
[enc/trans/JIS/UCS%JISX0212.src]

  These files are copyrighted as the following.

  >>>
    © 2015 Unicode®, Inc.

    For terms of use, see http://www.unicode.org/terms_of_use.html

[enc/trans/JIS/JISX0213-1%UCS@BMP.src]
[enc/trans/JIS/JISX0213-1%UCS@SIP.src]
[enc/trans/JIS/JISX0213-2%UCS@BMP.src]
[enc/trans/JIS/JISX0213-2%UCS@SIP.src]

  These files are copyrighted as the following.

  >>>
    Copyright (C) 2001:: earthian@tama.or.jp, All Rights Reserved.
    Copyright (C) 2001:: I'O, All Rights Reserved.
    Copyright (C) 2006:: Project X0213, All Rights Reserved.
    You can use, modify, distribute this table freely.

[enc/trans/JIS/UCS@BMP%JISX0213-1.src]
[enc/trans/JIS/UCS@BMP%JISX0213-2.src]
[enc/trans/JIS/UCS@SIP%JISX0213-1.src]
[enc/trans/JIS/UCS@SIP%JISX0213-2.src]

  These files are copyrighted as the following.

  >>>
    Copyright (C) 2001:: earthian@tama.or.jp, All Rights Reserved.
    Copyright (C) 2001:: I'O, All Rights Reserved.
    You can use, modify, distribute this table freely.

[enc/trans/ucm/glibc-BIG5-2.3.3.ucm]
[enc/trans/ucm/glibc-BIG5HKSCS-2.3.3.ucm]

  >>>
    Copyright (C) 2001-2005:: International Business Machines
                              Corporation and others.  All Rights Reserved.

[enc/trans/ucm/windows-950-2000.ucm]
[enc/trans/ucm/windows-950_hkscs-2001.ucm]

  >>>
    Copyright (C) 2001-2002:: International Business Machines
                              Corporation and others.  All Rights Reserved.


[configure]

  This file is free software.

  >>>
    Copyright (C) 1992-1996, 1998-2012:: Free Software Foundation, Inc.

    This configure script is free software; the Free Software Foundation
    gives unlimited permission to copy, distribute and modify it.

[tool/config.guess]
[tool/config.sub]

  As long as you distribute these files with the file configure, they
  are covered under the Ruby's license.

  >>>
    Copyright 1992-2018:: Free Software Foundation, Inc.

    This file is free software; you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful, but
    WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, see <https://www.gnu.org/licenses/>.

    As a special exception to the GNU General Public License, if you
    distribute this file as part of a program that contains a
    configuration script generated by Autoconf, you may include it under
    the same distribution terms that you use for the rest of that
    program.  This Exception is an additional permission under section 7
    of the GNU General Public License, version 3 ("GPLv3").

[tool/lib/test/*]
[tool/lib/core_assertions.rb]

  Some of methods on these files are based on MiniTest 4. MiniTest 4 is
  distributed under the MIT License.

  >>>
    Copyright (c) Ryan Davis, seattle.rb

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    'Software'), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[parse.c]
[parse.h]

  These files are licensed under the GPL, but are incorporated into Ruby and
  redistributed under the terms of the Ruby license, as permitted by the
  exception to the GPL below.

  >>>
    Copyright (C) 1984, 1989-1990, 2000-2015, 2018:: Free Software Foundation, Inc.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    As a special exception, you may create a larger work that contains
    part or all of the Bison parser skeleton and distribute that work
    under terms of your choice, so long as that work isn't itself a
    parser generator using the skeleton or a modified version thereof
    as a parser skeleton.  Alternatively, if you modify or redistribute
    the parser skeleton itself, you may (at your option) remove this
    special exception, which will cause the skeleton and the resulting
    Bison output files to be licensed under the GNU General Public
    License without this special exception.

    This special exception was added by the Free Software Foundation in
    version 2.2 of Bison.

[missing/dtoa.c]

  This file is under these licenses.

  >>>
    Copyright (c) 1991, 2000, 2001:: by Lucent Technologies.

    Permission to use, copy, modify, and distribute this software for any
    purpose without fee is hereby granted, provided that this entire notice
    is included in all copies of any software which is or includes a copy
    or modification of this software and in all copies of the supporting
    documentation for such software.

    THIS SOFTWARE IS BEING PROVIDED "AS IS", WITHOUT ANY EXPRESS OR IMPLIED
    WARRANTY.  IN PARTICULAR, NEITHER THE AUTHOR NOR LUCENT MAKES ANY
    REPRESENTATION OR WARRANTY OF ANY KIND CONCERNING THE MERCHANTABILITY
    OF THIS SOFTWARE OR ITS FITNESS FOR ANY PARTICULAR PURPOSE.

  >>>
    Copyright (c) 2004-2008:: David Schultz <das@FreeBSD.ORG>
                              All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

[win32/win32.c]
[include/ruby/win32.h]

  You can apply the Artistic License to these files. (or GPL,
  alternatively)

  >>>
    Copyright (c) 1993:: Intergraph Corporation

    You may distribute under the terms of either the GNU General Public
    License or the Artistic License, as specified in the perl README file.

[missing/mt19937.c]

  This file is under the new-style BSD license.

  >>>
    A C-program for MT19937, with initialization improved 2002/2/10.::
    Coded by Takuji Nishimura and Makoto Matsumoto.

    This is a faster version by taking Shawn Cokus's optimization,
    Matthe Bellew's simplification, Isaku Wada's real version.

    Before using, initialize the state by using init_genrand(seed)
    or init_by_array(init_key, key_length).

    Copyright (C) 1997 - 2002:: Makoto Matsumoto and Takuji Nishimura,
                                All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:

    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    3. The names of its contributors may not be used to endorse or promote
       products derived from this software without specific prior written
       permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


    Any feedback is very welcome.
    http://www.math.keio.ac.jp/matumoto/emt.html
    email: matumoto@math.keio.ac.jp

  The Wayback Machine url: http://web.archive.org/web/19990429082237/http://www.math.keio.ac.jp/matumoto/emt.html

[missing/procstat_vm.c]

  This file is under the new-style BSD license.

  >>>
    Copyright (c) 2007:: Robert N. M. Watson
                         All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

    $FreeBSD: head/usr.bin/procstat/procstat_vm.c 261780 2014-02-11 21:57:37Z jhb $

[vsnprintf.c]

  This file is under the {old-style BSD license}[rdoc-label:label-Old-style+BSD+license].

  >>>
    Copyright (c) 1990, 1993::
    The Regents of the University of California.  All rights reserved.

    This code is derived from software contributed to Berkeley by
    Chris Torek.

[st.c]
[strftime.c]
[include/ruby/st.h]
[missing/acosh.c]
[missing/alloca.c]
[missing/erf.c]
[missing/hypot.c]
[missing/lgamma_r.c]
[missing/memcmp.c]
[missing/memmove.c]
[missing/strchr.c]
[missing/strerror.c]
[missing/strstr.c]
[missing/tgamma.c]
[ext/date/date_strftime.c]
[ext/digest/sha1/sha1.c]
[ext/digest/sha1/sha1.h]

  These files are all under public domain.

[missing/crypt.c]

  This file is under the {old-style BSD license}[rdoc-label:label-Old-style+BSD+license].

  >>>
    Copyright (c) 1989, 1993::
    The Regents of the University of California.  All rights reserved.

    This code is derived from software contributed to Berkeley by
    Tom Truscott.

[missing/setproctitle.c]

  This file is under the {old-style BSD license}[rdoc-label:label-Old-style+BSD+license].

  >>>
    Copyright 2003:: Damien Miller
    Copyright (c) 1983, 1995-1997:: Eric P. Allman
    Copyright (c) 1988, 1993::
    The Regents of the University of California.  All rights reserved.

[missing/strlcat.c]
[missing/strlcpy.c]

  These files are under an ISC-style license.

  >>>
    Copyright (c) 1998, 2015:: Todd C. Miller <Todd.Miller@courtesan.com>

    Permission to use, copy, modify, and distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

[missing/langinfo.c]

  This file is from http://www.cl.cam.ac.uk/~mgk25/ucs/langinfo.c.
  Ruby uses a modified version. The file contains the following
  author/copyright notice:

  >>>
    Markus.Kuhn@cl.cam.ac.uk -- 2002-03-11::
    Permission to use, copy, modify, and distribute this software
    for any purpose and without fee is hereby granted. The author
    disclaims all warranties with regard to this software.

[ext/digest/md5/md5.c]
[ext/digest/md5/md5.h]

  These files are under the following license.  Ruby uses modified
  versions of them.

  >>>
    Copyright (C) 1999, 2000:: Aladdin Enterprises.  All rights reserved.

    This software is provided 'as-is', without any express or implied
    warranty.  In no event will the authors be held liable for any damages
    arising from the use of this software.

    Permission is granted to anyone to use this software for any purpose,
    including commercial applications, and to alter it and redistribute it
    freely, subject to the following restrictions:

    1. The origin of this software must not be misrepresented; you must not
       claim that you wrote the original software. If you use this software
       in a product, an acknowledgment in the product documentation would be
       appreciated but is not required.
    2. Altered source versions must be plainly marked as such, and must not be
       misrepresented as being the original software.
    3. This notice may not be removed or altered from any source distribution.

    L. Peter Deutsch
    ghost@aladdin.com

[ext/digest/rmd160/rmd160.c]
[ext/digest/rmd160/rmd160.h]

  These files have the following copyright information, and by the
  author we are allowed to use it under the new-style BSD license.

  >>>
    AUTHOR::  Antoon Bosselaers, ESAT-COSIC
              (Arranged for libc by Todd C. Miller)
    DATE::    1 March 1996

    Copyright (c):: Katholieke Universiteit Leuven
    1996, All Rights Reserved

[ext/digest/sha2/sha2.c]
[ext/digest/sha2/sha2.h]

  These files are under the new-style BSD license.

  >>>
    Copyright 2000:: Aaron D. Gifford.  All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.
    3. Neither the name of the copyright holder nor the names of contributors
       may be used to endorse or promote products derived from this software
       without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR(S) AND CONTRIBUTOR(S) ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR(S) OR CONTRIBUTOR(S) BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

[ext/json/generator/generator.c]

  The file contains the following copyright notice.

  >>>
    Copyright 2001-2004:: Unicode, Inc.

    Disclaimer::

      This source code is provided as is by Unicode, Inc. No claims are
      made as to fitness for any particular purpose. No warranties of any
      kind are expressed or implied. The recipient agrees to determine
      applicability of information provided. If this file has been
      purchased on magnetic or optical media from Unicode, Inc., the
      sole remedy for any claim will be exchange of defective media
      within 90 days of receipt.

    Limitations on Rights to Redistribute This Code::

      Unicode, Inc. hereby grants the right to freely use the information
      supplied in this file in the creation of products supporting the
      Unicode Standard, and to make copies of this file in any form
      for internal or external distribution as long as this notice
      remains attached.

[ext/nkf/nkf-utf8/config.h]
[ext/nkf/nkf-utf8/nkf.c]
[ext/nkf/nkf-utf8/utf8tbl.c]

  These files are under the following license.  So to speak, it is
  copyrighted semi-public-domain software.

  >>>
    Copyright (C) 1987:: Fujitsu LTD. (Itaru ICHIKAWA)

    Everyone is permitted to do anything on this program
    including copying, modifying, improving,
    as long as you don't try to pretend that you wrote it.
    i.e., the above copyright notice has to appear in all copies.
    Binary distribution requires original version messages.
    You don't have to ask before copying, redistribution or publishing.
    THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE.

[ext/psych]
[test/psych]

  The files under these directories are under the following license, except for
  ext/psych/yaml.

  >>>
    Copyright 2009:: Aaron Patterson, et al.

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the 'Software'), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

[ext/psych/yaml]

  The files under this directory are under the following license.

  >>>
    Copyright (c) 2006:: Kirill Simonov

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

[ext/pty/pty.c]

  >>>
    C) Copyright 1998:: by Akinori Ito.

    This software may be redistributed freely for this purpose, in full
    or in part, provided that this entire copyright notice is included
    on any copies of this software and applications and derivations thereof.

    This software is provided on an "as is" basis, without warranty of any
    kind, either expressed or implied, as to any matter including, but not
    limited to warranty of fitness of purpose, or merchantability, or
    results obtained from use of this software.

[ext/socket/addrinfo.h]
[ext/socket/getaddrinfo.c]
[ext/socket/getnameinfo.c]

  These files are under the new-style BSD license.

  >>>
    Copyright (C) 1995, 1996, 1997, 1998, and 1999:: WIDE Project.
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.
    3. Neither the name of the project nor the names of its contributors
       may be used to endorse or promote products derived from this software
       without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE PROJECT AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE PROJECT OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

[ext/win32ole/win32ole.c]

  You can apply the Artistic License to this file. (or GPL,
  alternatively)

  >>>
    (c) 1995:: Microsoft Corporation. All rights reserved.
    Developed by ActiveWare Internet Corp., http://www.ActiveWare.com

    Other modifications Copyright (c) 1997, 1998:: by Gurusamy Sarathy
    <gsar@umich.edu> and Jan Dubois <jan.dubois@ibm.net>

    You may distribute under the terms of either the GNU General Public
    License or the Artistic License, as specified in the README file
    of the Perl distribution.

  The Wayback Machine url: http://web.archive.org/web/19970607104352/http://www.activeware.com:80/

[lib/rdoc/generator/template/darkfish/css/fonts.css]

  This file is licensed under the {SIL Open Font License}[http://scripts.sil.org/OFL].

[spec/mspec]
[spec/ruby]

  The files under these directories are under the following license.

  >>>
    Copyright (c) 2008:: Engine Yard, Inc. All rights reserved.

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

[lib/rubygems.rb]
[lib/rubygems]
[test/rubygems]

  RubyGems is under the following license.

  >>>
    RubyGems is copyrighted free software by Chad Fowler, Rich Kilmer, Jim
    Weirich and others.  You can redistribute it and/or modify it under
    either the terms of the {MIT license}[rdoc-label:label-MIT+License], or the conditions
    below:

    1. You may make and give away verbatim copies of the source form of the
       software without restriction, provided that you duplicate all of the
       original copyright notices and associated disclaimers.

    2. You may modify your copy of the software in any way, provided that
       you do at least ONE of the following:

       a. place your modifications in the Public Domain or otherwise
          make them Freely Available, such as by posting said
          modifications to Usenet or an equivalent medium, or by allowing
          the author to include your modifications in the software.

       b. use the modified software only within your corporation or
          organization.

       c. give non-standard executables non-standard names, with
          instructions on where to get the original software distribution.

       d. make other distribution arrangements with the author.

    3. You may distribute the software in object code or executable
       form, provided that you do at least ONE of the following:

       a. distribute the executables and library files of the software,
          together with instructions (in the manual page or equivalent)
          on where to get the original distribution.

       b. accompany the distribution with the machine-readable source of
          the software.

       c. give non-standard executables non-standard names, with
          instructions on where to get the original software distribution.

       d. make other distribution arrangements with the author.

    4. You may modify and include the part of the software into any other
       software (possibly commercial).

    5. The scripts and library files supplied as input to or produced as
       output from the software do not automatically fall under the
       copyright of the software, but belong to whomever generated them,
       and may be sold commercially, and may be aggregated with this
       software.

    6. THIS SOFTWARE IS PROVIDED "AS IS" AND WITHOUT ANY EXPRESS OR
       IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
       WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
       PURPOSE.

[lib/bundler]
[lib/bundler.rb]
[spec/bundler]

  Bundler is under the following license.

  >>>
    Portions copyright (c) 2010:: Andre Arko
    Portions copyright (c) 2009:: Engine Yard

    {MIT License}[rdoc-label:label-MIT+License]

[lib/bundler/vendor/thor]

  Thor is under the following license.

  >>>
    Copyright (c) 2008 Yehuda Katz, Eric Hodel, et al.

    {MIT License}[rdoc-label:label-MIT+License]

[lib/rubygems/resolver/molinillo]
[lib/bundler/vendor/molinillo]

  molinillo is under the following license.

  >>>
    Copyright (c) 2014 Samuel E. Giddins segiddins@segiddins.me

    {MIT License}[rdoc-label:label-MIT+License]

[lib/bundler/vendor/connection_pool]

  connection_pool is under the following license.

  >>>
    Copyright (c) 2011 Mike Perham

    {MIT License}[rdoc-label:label-MIT+License]

[lib/bundler/vendor/net-http-persistent]

  net-http-persistent is under the following license.

  >>>
    Copyright (c) Eric Hodel, Aaron Patterson

    {MIT License}[rdoc-label:label-MIT+License]

[lib/did_you_mean]
[lib/did_you_mean.rb]
[test/did_you_mean]

  did_you_mean is under the following license.

  >>>
    Copyright (c) 2014-2016 Yuki Nishijima

    {MIT License}[rdoc-label:label-MIT+License]

[lib/error_highlight]
[lib/error_highlight.rb]
[test/error_highlight]

  error_highlight is under the following license.

  >>>
    Copyright (c) 2021 Yusuke Endoh

    {MIT License}[rdoc-label:label-MIT+License]

[benchmark/so_ackermann.rb]
[benchmark/so_array.rb]
[benchmark/so_binary_trees.rb]
[benchmark/so_concatenate.rb]
[benchmark/so_count_words.yml]
[benchmark/so_exception.rb]
[benchmark/so_fannkuch.rb]
[benchmark/so_fasta.rb]
[benchmark/so_k_nucleotide.yml]
[benchmark/so_lists.rb]
[benchmark/so_mandelbrot.rb]
[benchmark/so_matrix.rb]
[benchmark/so_meteor_contest.rb]
[benchmark/so_nbody.rb]
[benchmark/so_nested_loop.rb]
[benchmark/so_nsieve.rb]
[benchmark/so_nsieve_bits.rb]
[benchmark/so_object.rb]
[benchmark/so_partial_sums.rb]
[benchmark/so_pidigits.rb]
[benchmark/so_random.rb]
[benchmark/so_reverse_complement.yml]
[benchmark/so_sieve.rb]
[benchmark/so_spectralnorm.rb]

  These files are very old copy of then-called "The Great Computer Language
  Shootout".  LEGAL SITUATION OF THESE FILES ARE UNCLEAR because the original
  site has been lost.  Upstream diverged to delete several benchmarks listed
  above.

== MIT License
>>>
      Permission is hereby granted, free of charge, to any person obtaining
      a copy of this software and associated documentation files (the
      "Software"), to deal in the Software without restriction, including
      without limitation the rights to use, copy, modify, merge, publish,
      distribute, sublicense, and/or sell copies of the Software, and to
      permit persons to whom the Software is furnished to do so, subject to
      the following conditions:

      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
      LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
      OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
      WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

== Old-style BSD license
>>>
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions
      are met:
      1. Redistributions of source code must retain the above copyright
         notice, this list of conditions and the following disclaimer.
      2. Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in the
         documentation and/or other materials provided with the distribution.
      3. Neither the name of the University nor the names of its contributors
         may be used to endorse or promote products derived from this software
         without specific prior written permission.

      THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND
      ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED.  IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE
      FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
      OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
      HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
      LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
      OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
      SUCH DAMAGE.

      IMPORTANT NOTE::

      From ftp://ftp.cs.berkeley.edu/pub/4bsd/README.Impt.License.Change
      paragraph 3 above is now null and void.
```

Other bundled gems are licenced by their own license declared in their gemspecs.

## LibYAML

https://github.com/yaml/libyaml

```
Copyright (c) 2017-2020 Ingy döt Net
Copyright (c) 2006-2016 Kirill Simonov
Licensed under the MIT License.
```


## Zlib

https://www.zlib.net

```
  zlib.h -- interface of the 'zlib' general purpose compression library
  version 1.2.13, October 13th, 2022

  Copyright (C) 1995-2022 Jean-loup Gailly and Mark Adler

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

  Jean-loup Gailly        Mark Adler
  jloup@gzip.org          madler@alumni.caltech.edu
```

## wasi-libc

https://github.com/WebAssembly/wasi-libc

```
wasi-libc as a whole is multi-licensed under the
Apache License v2.0 with LLVM Exceptions, the Apache License v2.0, and
the MIT License. See the LICENSE-APACHE-LLVM, LICENSE-APACHE and LICENSE-MIT
files, respectively, for details.

Portions of this software are derived from third-party works covered by
their own licenses:

dlmalloc/                     - CC0; see the notice in malloc.c for details
emmalloc/                     - MIT; see the notice in emmalloc.c for details
libc-bottom-half/cloudlibc/   - BSD-2-Clause; see the LICENSE file for details
libc-top-half/musl/           - MIT; see the COPYRIGHT file for details

wasi-libc's changes to these files are multi-licensed under the
Apache License v2.0 with LLVM Exceptions, the Apache License v2.0,
the MIT License, and the original licenses of the third-party works.
```

Licensed under the MIT License

## OpenSSL

https://www.openssl.org/

```
Copyright 1995-2021 The OpenSSL Project Authors. All Rights Reserved.
Licensed under the Apache License 2.0 https://www.openssl.org/source/license.html
```

## wasi-vfs

https://github.com/kateinoigakukun/wasi-vfs

```
Copyright (c) 2022 Yuta Saito. All rights reserved.
Licensed under the MIT License
```

---

## MIT License

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
*/
(function () {
    'use strict';
  
    /******************************************************************************
    Copyright (c) Microsoft Corporation.
  
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
  
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
  
  
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
  
    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }
  
    var global$1 = (typeof global !== "undefined" ? global :
      typeof self !== "undefined" ? self :
      typeof window !== "undefined" ? window : {});
  
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    var inited = false;
    function init () {
      inited = true;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }
  
      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;
    }
  
    function toByteArray (b64) {
      if (!inited) {
        init();
      }
      var i, j, l, tmp, placeHolders, arr;
      var len = b64.length;
  
      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }
  
      // the number of equal signs (place holders)
      // if there are two placeholders, than the two characters before it
      // represent one byte
      // if there is only one, then the three characters before it represent 2 bytes
      // this is just a cheap hack to not do indexOf twice
      placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
  
      // base64 is 4/3 + up to two characters of the original data
      arr = new Arr(len * 3 / 4 - placeHolders);
  
      // if there are placeholders, only get up to the last complete 4 chars
      l = placeHolders > 0 ? len - 4 : len;
  
      var L = 0;
  
      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
        arr[L++] = (tmp >> 16) & 0xFF;
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }
  
      if (placeHolders === 2) {
        tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
        arr[L++] = tmp & 0xFF;
      } else if (placeHolders === 1) {
        tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }
  
      return arr
    }
  
    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
    }
  
    function encodeChunk (uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join('')
    }
  
    function fromByteArray (uint8) {
      if (!inited) {
        init();
      }
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
      var output = '';
      var parts = [];
      var maxChunkLength = 16383; // must be multiple of 3
  
      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
      }
  
      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup[tmp >> 2];
        output += lookup[(tmp << 4) & 0x3F];
        output += '==';
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
        output += lookup[tmp >> 10];
        output += lookup[(tmp >> 4) & 0x3F];
        output += lookup[(tmp << 2) & 0x3F];
        output += '=';
      }
  
      parts.push(output);
  
      return parts.join('')
    }
  
    function read (buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? (nBytes - 1) : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
  
      i += d;
  
      e = s & ((1 << (-nBits)) - 1);
      s >>= (-nBits);
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
  
      m = e & ((1 << (-nBits)) - 1);
      e >>= (-nBits);
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
  
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }
  
    function write (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
      var i = isLE ? 0 : (nBytes - 1);
      var d = isLE ? 1 : -1;
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
  
      value = Math.abs(value);
  
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
  
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
  
      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
  
      e = (e << mLen) | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
  
      buffer[offset + i - d] |= s * 128;
    }
  
    var toString$1 = {}.toString;
  
    var isArray = Array.isArray || function (arr) {
      return toString$1.call(arr) == '[object Array]';
    };
  
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
  
    var INSPECT_MAX_BYTES = 50;
  
    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.
  
     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
      ? global$1.TYPED_ARRAY_SUPPORT
      : true;
  
    /*
     * Export kMaxLength after typed array support is determined.
     */
    kMaxLength();
  
    function kMaxLength () {
      return Buffer.TYPED_ARRAY_SUPPORT
        ? 0x7fffffff
        : 0x3fffffff
    }
  
    function createBuffer (that, length) {
      if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length')
      }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer(length);
        }
        that.length = length;
      }
  
      return that
    }
  
    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */
  
    function Buffer (arg, encodingOrOffset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length)
      }
  
      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error(
            'If encoding is specified then the first argument must be a string'
          )
        }
        return allocUnsafe(this, arg)
      }
      return from(this, arg, encodingOrOffset, length)
    }
  
    Buffer.poolSize = 8192; // not used by this implementation
  
    // TODO: Legacy, not needed anymore. Remove in next major version.
    Buffer._augment = function (arr) {
      arr.__proto__ = Buffer.prototype;
      return arr
    };
  
    function from (that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number')
      }
  
      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length)
      }
  
      if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset)
      }
  
      return fromObject(that, value)
    }
  
    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length)
    };
  
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;
      if (typeof Symbol !== 'undefined' && Symbol.species &&
          Buffer[Symbol.species] === Buffer) ;
    }
  
    function assertSize (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number')
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative')
      }
    }
  
    function alloc (that, size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(that, size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer(that, size).fill(fill, encoding)
          : createBuffer(that, size).fill(fill)
      }
      return createBuffer(that, size)
    }
  
    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(null, size, fill, encoding)
    };
  
    function allocUnsafe (that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that
    }
  
    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(null, size)
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(null, size)
    };
  
    function fromString (that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }
  
      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding')
      }
  
      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);
  
      var actual = that.write(string, encoding);
  
      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual);
      }
  
      return that
    }
  
    function fromArrayLike (that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that
    }
  
    function fromArrayBuffer (that, array, byteOffset, length) {
      array.byteLength; // this throws if `array` is not a valid ArrayBuffer
  
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds')
      }
  
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds')
      }
  
      if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
      } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }
  
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike(that, array);
      }
      return that
    }
  
    function fromObject (that, obj) {
      if (internalIsBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);
  
        if (that.length === 0) {
          return that
        }
  
        obj.copy(that, 0, 0, len);
        return that
      }
  
      if (obj) {
        if ((typeof ArrayBuffer !== 'undefined' &&
            obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(that, 0)
          }
          return fromArrayLike(that, obj)
        }
  
        if (obj.type === 'Buffer' && isArray(obj.data)) {
          return fromArrayLike(that, obj.data)
        }
      }
  
      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
    }
  
    function checked (length) {
      // Note: cannot use `length < kMaxLength()` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + kMaxLength().toString(16) + ' bytes')
      }
      return length | 0
    }
    Buffer.isBuffer = isBuffer;
    function internalIsBuffer (b) {
      return !!(b != null && b._isBuffer)
    }
  
    Buffer.compare = function compare (a, b) {
      if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
        throw new TypeError('Arguments must be Buffers')
      }
  
      if (a === b) return 0
  
      var x = a.length;
      var y = b.length;
  
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break
        }
      }
  
      if (x < y) return -1
      if (y < x) return 1
      return 0
    };
  
    Buffer.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    };
  
    Buffer.concat = function concat (list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
  
      if (list.length === 0) {
        return Buffer.alloc(0)
      }
  
      var i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
  
      var buffer = Buffer.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer
    };
  
    function byteLength (string, encoding) {
      if (internalIsBuffer(string)) {
        return string.length
      }
      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
          (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        string = '' + string;
      }
  
      var len = string.length;
      if (len === 0) return 0
  
      // Use a for loop to avoid recursion
      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) return utf8ToBytes(string).length // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength;
  
    function slowToString (encoding, start, end) {
      var loweredCase = false;
  
      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.
  
      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0;
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }
  
      if (end === undefined || end > this.length) {
        end = this.length;
      }
  
      if (end <= 0) {
        return ''
      }
  
      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0;
      start >>>= 0;
  
      if (end <= start) {
        return ''
      }
  
      if (!encoding) encoding = 'utf8';
  
      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)
  
          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)
  
          case 'ascii':
            return asciiSlice(this, start, end)
  
          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)
  
          case 'base64':
            return base64Slice(this, start, end)
  
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)
  
          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    }
  
    // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.
    Buffer.prototype._isBuffer = true;
  
    function swap (b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
  
    Buffer.prototype.swap16 = function swap16 () {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this
    };
  
    Buffer.prototype.swap32 = function swap32 () {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this
    };
  
    Buffer.prototype.swap64 = function swap64 () {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this
    };
  
    Buffer.prototype.toString = function toString () {
      var length = this.length | 0;
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice(this, 0, length)
      return slowToString.apply(this, arguments)
    };
  
    Buffer.prototype.equals = function equals (b) {
      if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer.compare(this, b) === 0
    };
  
    Buffer.prototype.inspect = function inspect () {
      var str = '';
      var max = INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) str += ' ... ';
      }
      return '<Buffer ' + str + '>'
    };
  
    Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer(target)) {
        throw new TypeError('Argument must be a Buffer')
      }
  
      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = target ? target.length : 0;
      }
      if (thisStart === undefined) {
        thisStart = 0;
      }
      if (thisEnd === undefined) {
        thisEnd = this.length;
      }
  
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }
  
      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }
  
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
  
      if (this === target) return 0
  
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
  
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
  
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break
        }
      }
  
      if (x < y) return -1
      if (y < x) return 1
      return 0
    };
  
    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1
  
      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }
      byteOffset = +byteOffset;  // Coerce to Number.
      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1);
      }
  
      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1
      }
  
      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
      }
  
      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (internalIsBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (Buffer.TYPED_ARRAY_SUPPORT &&
            typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
      }
  
      throw new TypeError('val must be string, number or Buffer')
    }
  
    function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
  
      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
  
      function read (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }
  
      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break
            }
          }
          if (found) return i
        }
      }
  
      return -1
    }
  
    Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    };
  
    Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    };
  
    Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    };
  
    function hexWrite (buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
  
      // must be an even number of digits
      var strLen = string.length;
      if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
  
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i
        buf[offset + i] = parsed;
      }
      return i
    }
  
    function utf8Write (buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }
  
    function asciiWrite (buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }
  
    function latin1Write (buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length)
    }
  
    function base64Write (buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }
  
    function ucs2Write (buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }
  
    Buffer.prototype.write = function write (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === undefined) encoding = 'utf8';
        } else {
          encoding = length;
          length = undefined;
        }
      // legacy write(string, encoding, offset, length) - remove in v0.13
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }
  
      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;
  
      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }
  
      if (!encoding) encoding = 'utf8';
  
      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)
  
          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)
  
          case 'ascii':
            return asciiWrite(this, string, offset, length)
  
          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length)
  
          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)
  
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)
  
          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
  
    Buffer.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };
  
    function base64Slice (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return fromByteArray(buf)
      } else {
        return fromByteArray(buf.slice(start, end))
      }
    }
  
    function utf8Slice (buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
  
      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
          : (firstByte > 0xBF) ? 2
          : 1;
  
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
  
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }
              break
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
  
        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }
  
        res.push(codePoint);
        i += bytesPerSequence;
      }
  
      return decodeCodePointsArray(res)
    }
  
    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000;
  
    function decodeCodePointsArray (codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }
  
      // Decode in chunks to avoid "call stack size exceeded".
      var res = '';
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res
    }
  
    function asciiSlice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);
  
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }
      return ret
    }
  
    function latin1Slice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);
  
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret
    }
  
    function hexSlice (buf, start, end) {
      var len = buf.length;
  
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
  
      var out = '';
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
      }
      return out
    }
  
    function utf16leSlice (buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = '';
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res
    }
  
    Buffer.prototype.slice = function slice (start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;
  
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
  
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
  
      if (end < start) end = start;
  
      var newBuf;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }
  
      return newBuf
    };
  
    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }
  
    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);
  
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
  
      return val
    };
  
    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
      }
  
      var val = this[offset + --byteLength];
      var mul = 1;
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }
  
      return val
    };
  
    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset]
    };
  
    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | (this[offset + 1] << 8)
    };
  
    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return (this[offset] << 8) | this[offset + 1]
    };
  
    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
  
      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    };
  
    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
  
      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    };
  
    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);
  
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
      mul *= 0x80;
  
      if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  
      return val
    };
  
    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);
  
      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }
      mul *= 0x80;
  
      if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  
      return val
    };
  
    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    };
  
    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | (this[offset + 1] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };
  
    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | (this[offset] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };
  
    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
  
      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    };
  
    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
  
      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    };
  
    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return read(this, offset, true, 23, 4)
    };
  
    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return read(this, offset, false, 23, 4)
    };
  
    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return read(this, offset, true, 52, 8)
    };
  
    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return read(this, offset, false, 52, 8)
    };
  
    function checkInt (buf, value, offset, ext, max, min) {
      if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }
  
    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }
  
      var mul = 1;
      var i = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }
  
      return offset + byteLength
    };
  
    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }
  
      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }
  
      return offset + byteLength
    };
  
    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      this[offset] = (value & 0xff);
      return offset + 1
    };
  
    function objectWriteUInt16 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
          (littleEndian ? i : 1 - i) * 8;
      }
    }
  
    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };
  
    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };
  
    function objectWriteUInt32 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffffffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
      }
    }
  
    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = (value >>> 24);
        this[offset + 2] = (value >>> 16);
        this[offset + 1] = (value >>> 8);
        this[offset] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };
  
    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };
  
    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
  
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }
  
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }
  
      return offset + byteLength
    };
  
    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
  
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }
  
      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }
  
      return offset + byteLength
    };
  
    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      if (value < 0) value = 0xff + value + 1;
      this[offset] = (value & 0xff);
      return offset + 1
    };
  
    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };
  
    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };
  
    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
        this[offset + 2] = (value >>> 16);
        this[offset + 3] = (value >>> 24);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };
  
    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (value < 0) value = 0xffffffff + value + 1;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };
  
    function checkIEEE754 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }
  
    function writeFloat (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4
    }
  
    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    };
  
    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    };
  
    function writeDouble (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8
    }
  
    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    };
  
    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    };
  
    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
  
      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0
  
      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')
  
      // Are we oob?
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
  
      var len = end - start;
      var i;
  
      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      }
  
      return len
    };
  
    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      }
  
      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }
  
      if (end <= start) {
        return this
      }
  
      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;
  
      if (!val) val = 0;
  
      var i;
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = internalIsBuffer(val)
          ? val
          : utf8ToBytes(new Buffer(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
  
      return this
    };
  
    // HELPER FUNCTIONS
    // ================
  
    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  
    function base64clean (str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim(str).replace(INVALID_BASE64_RE, '');
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '=';
      }
      return str
    }
  
    function stringtrim (str) {
      if (str.trim) return str.trim()
      return str.replace(/^\s+|\s+$/g, '')
    }
  
    function toHex (n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }
  
    function utf8ToBytes (string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
  
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
  
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            }
  
            // valid lead
            leadSurrogate = codePoint;
  
            continue
          }
  
          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue
          }
  
          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
  
        leadSurrogate = null;
  
        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else {
          throw new Error('Invalid code point')
        }
      }
  
      return bytes
    }
  
    function asciiToBytes (str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }
      return byteArray
    }
  
    function utf16leToBytes (str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break
  
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
  
      return byteArray
    }
  
  
    function base64ToBytes (str) {
      return toByteArray(base64clean(str))
    }
  
    function blitBuffer (src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i];
      }
      return i
    }
  
    function isnan (val) {
      return val !== val // eslint-disable-line no-self-compare
    }
  
  
    // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    function isBuffer(obj) {
      return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
    }
  
    function isFastBuffer (obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    }
  
    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer (obj) {
      return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
    }
  
    /*!
     * @wasmer/wasi
     * Isomorphic Javascript library for interacting with WASI Modules in Node.js and the Browser.
     *
     * @version v1.2.2
     * @author Wasmer Engineering Team <engineering@wasmer.io>
     * @homepage https://github.com/wasmerio/wasmer-js
     * @repository https://github.com/wasmerio/wasmer-js
     * @license MIT
     */
    function A(A,I,g,B){return new(g||(g=Promise))((function(Q,C){function E(A){try{i(B.next(A));}catch(A){C(A);}}function D(A){try{i(B.throw(A));}catch(A){C(A);}}function i(A){var I;A.done?Q(A.value):(I=A.value,I instanceof g?I:new g((function(A){A(I);}))).then(E,D);}i((B=B.apply(A,I||[])).next());}))}function I(A,I){var g,B,Q,C,E={label:0,sent:function(){if(1&Q[0])throw Q[1];return Q[1]},trys:[],ops:[]};return C={next:D(0),throw:D(1),return:D(2)},"function"==typeof Symbol&&(C[Symbol.iterator]=function(){return this}),C;function D(D){return function(i){return function(D){if(g)throw new TypeError("Generator is already executing.");for(;C&&(C=0,D[0]&&(E=0)),E;)try{if(g=1,B&&(Q=2&D[0]?B.return:D[0]?B.throw||((Q=B.return)&&Q.call(B),0):B.next)&&!(Q=Q.call(B,D[1])).done)return Q;switch(B=0,Q&&(D=[2&D[0],Q.value]),D[0]){case 0:case 1:Q=D;break;case 4:return E.label++,{value:D[1],done:!1};case 5:E.label++,B=D[1],D=[0];continue;case 7:D=E.ops.pop(),E.trys.pop();continue;default:if(!(Q=E.trys,(Q=Q.length>0&&Q[Q.length-1])||6!==D[0]&&2!==D[0])){E=0;continue}if(3===D[0]&&(!Q||D[1]>Q[0]&&D[1]<Q[3])){E.label=D[1];break}if(6===D[0]&&E.label<Q[1]){E.label=Q[1],Q=D;break}if(Q&&E.label<Q[2]){E.label=Q[2],E.ops.push(D);break}Q[2]&&E.ops.pop(),E.trys.pop();continue}D=I.call(A,E);}catch(A){D=[6,A],B=0;}finally{g=Q=0;}if(5&D[0])throw D[1];return {value:D[0]?D[1]:void 0,done:!0}}([D,i])}}}let g;const B=new Array(32).fill(void 0);function Q(A){return B[A]}B.push(void 0,null,!0,!1);let C=B.length;function E(A){C===B.length&&B.push(B.length+1);const I=C;return C=B[I],B[I]=A,I}const D=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});D.decode();let i=new Uint8Array;function w(){return 0===i.byteLength&&(i=new Uint8Array(g.memory.buffer)),i}function o(A,I){return D.decode(w().subarray(A,A+I))}function G(A){const I=Q(A);return function(A){A<36||(B[A]=C,C=A);}(A),I}function N(A){const I=typeof A;if("number"==I||"boolean"==I||null==A)return `${A}`;if("string"==I)return `"${A}"`;if("symbol"==I){const I=A.description;return null==I?"Symbol":`Symbol(${I})`}if("function"==I){const I=A.name;return "string"==typeof I&&I.length>0?`Function(${I})`:"Function"}if(Array.isArray(A)){const I=A.length;let g="[";I>0&&(g+=N(A[0]));for(let B=1;B<I;B++)g+=", "+N(A[B]);return g+="]",g}const g=/\[object ([^\]]+)\]/.exec(toString.call(A));let B;if(!(g.length>1))return toString.call(A);if(B=g[1],"Object"==B)try{return "Object("+JSON.stringify(A)+")"}catch(A){return "Object"}return A instanceof Error?`${A.name}: ${A.message}\n${A.stack}`:B}let M=0;const k=new TextEncoder("utf-8"),y="function"==typeof k.encodeInto?function(A,I){return k.encodeInto(A,I)}:function(A,I){const g=k.encode(A);return I.set(g),{read:A.length,written:g.length}};function Y(A,I,g){if(void 0===g){const g=k.encode(A),B=I(g.length);return w().subarray(B,B+g.length).set(g),M=g.length,B}let B=A.length,Q=I(B);const C=w();let E=0;for(;E<B;E++){const I=A.charCodeAt(E);if(I>127)break;C[Q+E]=I;}if(E!==B){0!==E&&(A=A.slice(E)),Q=g(Q,B,B=E+3*A.length);const I=w().subarray(Q+E,Q+B);E+=y(A,I).written;}return M=E,Q}let a=new Int32Array;function h(){return 0===a.byteLength&&(a=new Int32Array(g.memory.buffer)),a}function F(A){return null==A}let J=new Float64Array;function R(A,I){try{return A.apply(this,I)}catch(A){g.__wbindgen_exn_store(E(A));}}function c(A,I){return w().subarray(A/1,A/1+I)}function K(A,I){const g=I(1*A.length);return w().set(A,g/1),M=A.length,g}class U{static __wrap(A){const I=Object.create(U.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();g.__wbg_jsvirtualfile_free(A);}lastAccessed(){const A=g.jsvirtualfile_lastAccessed(this.ptr);return BigInt.asUintN(64,A)}lastModified(){const A=g.jsvirtualfile_lastModified(this.ptr);return BigInt.asUintN(64,A)}createdTime(){const A=g.jsvirtualfile_createdTime(this.ptr);return BigInt.asUintN(64,A)}size(){const A=g.jsvirtualfile_size(this.ptr);return BigInt.asUintN(64,A)}setLength(A){try{const B=g.__wbindgen_add_to_stack_pointer(-16);g.jsvirtualfile_setLength(B,this.ptr,A);var I=h()[B/4+0];if(h()[B/4+1])throw G(I)}finally{g.__wbindgen_add_to_stack_pointer(16);}}read(){try{const C=g.__wbindgen_add_to_stack_pointer(-16);g.jsvirtualfile_read(C,this.ptr);var A=h()[C/4+0],I=h()[C/4+1],B=h()[C/4+2];if(h()[C/4+3])throw G(B);var Q=c(A,I).slice();return g.__wbindgen_free(A,1*I),Q}finally{g.__wbindgen_add_to_stack_pointer(16);}}readString(){try{const D=g.__wbindgen_add_to_stack_pointer(-16);g.jsvirtualfile_readString(D,this.ptr);var A=h()[D/4+0],I=h()[D/4+1],B=h()[D/4+2],Q=h()[D/4+3],C=A,E=I;if(Q)throw C=0,E=0,G(B);return o(C,E)}finally{g.__wbindgen_add_to_stack_pointer(16),g.__wbindgen_free(C,E);}}write(A){try{const E=g.__wbindgen_add_to_stack_pointer(-16);var I=K(A,g.__wbindgen_malloc),B=M;g.jsvirtualfile_write(E,this.ptr,I,B);var Q=h()[E/4+0],C=h()[E/4+1];if(h()[E/4+2])throw G(C);return Q>>>0}finally{g.__wbindgen_add_to_stack_pointer(16),A.set(w().subarray(I/1,I/1+B)),g.__wbindgen_free(I,1*B);}}writeString(A){try{const Q=g.__wbindgen_add_to_stack_pointer(-16),C=Y(A,g.__wbindgen_malloc,g.__wbindgen_realloc),E=M;g.jsvirtualfile_writeString(Q,this.ptr,C,E);var I=h()[Q/4+0],B=h()[Q/4+1];if(h()[Q/4+2])throw G(B);return I>>>0}finally{g.__wbindgen_add_to_stack_pointer(16);}}flush(){try{const I=g.__wbindgen_add_to_stack_pointer(-16);g.jsvirtualfile_flush(I,this.ptr);var A=h()[I/4+0];if(h()[I/4+1])throw G(A)}finally{g.__wbindgen_add_to_stack_pointer(16);}}seek(A){try{const Q=g.__wbindgen_add_to_stack_pointer(-16);g.jsvirtualfile_seek(Q,this.ptr,A);var I=h()[Q/4+0],B=h()[Q/4+1];if(h()[Q/4+2])throw G(B);return I>>>0}finally{g.__wbindgen_add_to_stack_pointer(16);}}}class S{static __wrap(A){const I=Object.create(S.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();g.__wbg_memfs_free(A);}static __wbgd_downcast_token(){return G(g.memfs___wbgd_downcast_token())}constructor(){try{const B=g.__wbindgen_add_to_stack_pointer(-16);g.memfs_new(B);var A=h()[B/4+0],I=h()[B/4+1];if(h()[B/4+2])throw G(I);return S.__wrap(A)}finally{g.__wbindgen_add_to_stack_pointer(16);}}static from_js(A){try{const Q=g.__wbindgen_add_to_stack_pointer(-16);g.memfs_from_js(Q,E(A));var I=h()[Q/4+0],B=h()[Q/4+1];if(h()[Q/4+2])throw G(B);return S.__wrap(I)}finally{g.__wbindgen_add_to_stack_pointer(16);}}readDir(A){try{const Q=g.__wbindgen_add_to_stack_pointer(-16),C=Y(A,g.__wbindgen_malloc,g.__wbindgen_realloc),E=M;g.memfs_readDir(Q,this.ptr,C,E);var I=h()[Q/4+0],B=h()[Q/4+1];if(h()[Q/4+2])throw G(B);return G(I)}finally{g.__wbindgen_add_to_stack_pointer(16);}}createDir(A){try{const B=g.__wbindgen_add_to_stack_pointer(-16),Q=Y(A,g.__wbindgen_malloc,g.__wbindgen_realloc),C=M;g.memfs_createDir(B,this.ptr,Q,C);var I=h()[B/4+0];if(h()[B/4+1])throw G(I)}finally{g.__wbindgen_add_to_stack_pointer(16);}}removeDir(A){try{const B=g.__wbindgen_add_to_stack_pointer(-16),Q=Y(A,g.__wbindgen_malloc,g.__wbindgen_realloc),C=M;g.memfs_removeDir(B,this.ptr,Q,C);var I=h()[B/4+0];if(h()[B/4+1])throw G(I)}finally{g.__wbindgen_add_to_stack_pointer(16);}}removeFile(A){try{const B=g.__wbindgen_add_to_stack_pointer(-16),Q=Y(A,g.__wbindgen_malloc,g.__wbindgen_realloc),C=M;g.memfs_removeFile(B,this.ptr,Q,C);var I=h()[B/4+0];if(h()[B/4+1])throw G(I)}finally{g.__wbindgen_add_to_stack_pointer(16);}}rename(A,I){try{const Q=g.__wbindgen_add_to_stack_pointer(-16),C=Y(A,g.__wbindgen_malloc,g.__wbindgen_realloc),E=M,D=Y(I,g.__wbindgen_malloc,g.__wbindgen_realloc),i=M;g.memfs_rename(Q,this.ptr,C,E,D,i);var B=h()[Q/4+0];if(h()[Q/4+1])throw G(B)}finally{g.__wbindgen_add_to_stack_pointer(16);}}metadata(A){try{const Q=g.__wbindgen_add_to_stack_pointer(-16),C=Y(A,g.__wbindgen_malloc,g.__wbindgen_realloc),E=M;g.memfs_metadata(Q,this.ptr,C,E);var I=h()[Q/4+0],B=h()[Q/4+1];if(h()[Q/4+2])throw G(B);return G(I)}finally{g.__wbindgen_add_to_stack_pointer(16);}}open(A,I){try{const C=g.__wbindgen_add_to_stack_pointer(-16),D=Y(A,g.__wbindgen_malloc,g.__wbindgen_realloc),i=M;g.memfs_open(C,this.ptr,D,i,E(I));var B=h()[C/4+0],Q=h()[C/4+1];if(h()[C/4+2])throw G(Q);return U.__wrap(B)}finally{g.__wbindgen_add_to_stack_pointer(16);}}}class s{static __wrap(A){const I=Object.create(s.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();g.__wbg_wasi_free(A);}constructor(A){try{const Q=g.__wbindgen_add_to_stack_pointer(-16);g.wasi_new(Q,E(A));var I=h()[Q/4+0],B=h()[Q/4+1];if(h()[Q/4+2])throw G(B);return s.__wrap(I)}finally{g.__wbindgen_add_to_stack_pointer(16);}}get fs(){try{const B=g.__wbindgen_add_to_stack_pointer(-16);g.wasi_fs(B,this.ptr);var A=h()[B/4+0],I=h()[B/4+1];if(h()[B/4+2])throw G(I);return S.__wrap(A)}finally{g.__wbindgen_add_to_stack_pointer(16);}}getImports(A){try{const Q=g.__wbindgen_add_to_stack_pointer(-16);g.wasi_getImports(Q,this.ptr,E(A));var I=h()[Q/4+0],B=h()[Q/4+1];if(h()[Q/4+2])throw G(B);return G(I)}finally{g.__wbindgen_add_to_stack_pointer(16);}}instantiate(A,I){try{const C=g.__wbindgen_add_to_stack_pointer(-16);g.wasi_instantiate(C,this.ptr,E(A),F(I)?0:E(I));var B=h()[C/4+0],Q=h()[C/4+1];if(h()[C/4+2])throw G(Q);return G(B)}finally{g.__wbindgen_add_to_stack_pointer(16);}}start(A){try{const Q=g.__wbindgen_add_to_stack_pointer(-16);g.wasi_start(Q,this.ptr,F(A)?0:E(A));var I=h()[Q/4+0],B=h()[Q/4+1];if(h()[Q/4+2])throw G(B);return I>>>0}finally{g.__wbindgen_add_to_stack_pointer(16);}}getStdoutBuffer(){try{const C=g.__wbindgen_add_to_stack_pointer(-16);g.wasi_getStdoutBuffer(C,this.ptr);var A=h()[C/4+0],I=h()[C/4+1],B=h()[C/4+2];if(h()[C/4+3])throw G(B);var Q=c(A,I).slice();return g.__wbindgen_free(A,1*I),Q}finally{g.__wbindgen_add_to_stack_pointer(16);}}getStdoutString(){try{const D=g.__wbindgen_add_to_stack_pointer(-16);g.wasi_getStdoutString(D,this.ptr);var A=h()[D/4+0],I=h()[D/4+1],B=h()[D/4+2],Q=h()[D/4+3],C=A,E=I;if(Q)throw C=0,E=0,G(B);return o(C,E)}finally{g.__wbindgen_add_to_stack_pointer(16),g.__wbindgen_free(C,E);}}getStderrBuffer(){try{const C=g.__wbindgen_add_to_stack_pointer(-16);g.wasi_getStderrBuffer(C,this.ptr);var A=h()[C/4+0],I=h()[C/4+1],B=h()[C/4+2];if(h()[C/4+3])throw G(B);var Q=c(A,I).slice();return g.__wbindgen_free(A,1*I),Q}finally{g.__wbindgen_add_to_stack_pointer(16);}}getStderrString(){try{const D=g.__wbindgen_add_to_stack_pointer(-16);g.wasi_getStderrString(D,this.ptr);var A=h()[D/4+0],I=h()[D/4+1],B=h()[D/4+2],Q=h()[D/4+3],C=A,E=I;if(Q)throw C=0,E=0,G(B);return o(C,E)}finally{g.__wbindgen_add_to_stack_pointer(16),g.__wbindgen_free(C,E);}}setStdinBuffer(A){try{const B=g.__wbindgen_add_to_stack_pointer(-16),Q=K(A,g.__wbindgen_malloc),C=M;g.wasi_setStdinBuffer(B,this.ptr,Q,C);var I=h()[B/4+0];if(h()[B/4+1])throw G(I)}finally{g.__wbindgen_add_to_stack_pointer(16);}}setStdinString(A){try{const B=g.__wbindgen_add_to_stack_pointer(-16),Q=Y(A,g.__wbindgen_malloc,g.__wbindgen_realloc),C=M;g.wasi_setStdinString(B,this.ptr,Q,C);var I=h()[B/4+0];if(h()[B/4+1])throw G(I)}finally{g.__wbindgen_add_to_stack_pointer(16);}}}class L{static __wrap(A){const I=Object.create(L.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();g.__wbg_wasmerruntimeerror_free(A);}static __wbgd_downcast_token(){return G(g.wasmerruntimeerror___wbgd_downcast_token())}}function H(){const A={wbg:{}};return A.wbg.__wbindgen_object_clone_ref=function(A){return E(Q(A))},A.wbg.__wbg_crypto_e1d53a1d73fb10b8=function(A){return E(Q(A).crypto)},A.wbg.__wbg_process_038c26bf42b093f8=function(A){return E(Q(A).process)},A.wbg.__wbg_versions_ab37218d2f0b24a8=function(A){return E(Q(A).versions)},A.wbg.__wbg_node_080f4b19d15bc1fe=function(A){return E(Q(A).node)},A.wbg.__wbindgen_is_string=function(A){return "string"==typeof Q(A)},A.wbg.__wbg_require_78a3dcfbdba9cbce=function(){return R((function(){return E(module.require)}),arguments)},A.wbg.__wbindgen_string_new=function(A,I){return E(o(A,I))},A.wbg.__wbg_call_168da88779e35f61=function(){return R((function(A,I,g){return E(Q(A).call(Q(I),Q(g)))}),arguments)},A.wbg.__wbg_msCrypto_6e7d3e1f92610cbb=function(A){return E(Q(A).msCrypto)},A.wbg.__wbg_newwithlength_f5933855e4f48a19=function(A){return E(new Uint8Array(A>>>0))},A.wbg.__wbindgen_is_object=function(A){const I=Q(A);return "object"==typeof I&&null!==I},A.wbg.__wbg_get_57245cc7d7c7619d=function(A,I){return E(Q(A)[I>>>0])},A.wbg.__wbg_call_97ae9d8645dc388b=function(){return R((function(A,I){return E(Q(A).call(Q(I)))}),arguments)},A.wbg.__wbg_self_6d479506f72c6a71=function(){return R((function(){return E(self.self)}),arguments)},A.wbg.__wbg_window_f2557cc78490aceb=function(){return R((function(){return E(window.window)}),arguments)},A.wbg.__wbg_globalThis_7f206bda628d5286=function(){return R((function(){return E(globalThis.globalThis)}),arguments)},A.wbg.__wbg_global_ba75c50d1cf384f4=function(){return R((function(){return E(global.global)}),arguments)},A.wbg.__wbindgen_is_undefined=function(A){return void 0===Q(A)},A.wbg.__wbg_newnoargs_b5b063fc6c2f0376=function(A,I){return E(new Function(o(A,I)))},A.wbg.__wbg_instanceof_Function_056d5b3aef8aaa85=function(A){let I;try{I=Q(A)instanceof Function;}catch{I=!1;}return I},A.wbg.__wbindgen_memory=function(){return E(g.memory)},A.wbg.__wbg_buffer_3f3d764d4747d564=function(A){return E(Q(A).buffer)},A.wbg.__wbg_new_8c3f0052272a457a=function(A){return E(new Uint8Array(Q(A)))},A.wbg.__wbg_set_83db9690f9353e79=function(A,I,g){Q(A).set(Q(I),g>>>0);},A.wbg.__wbg_length_9e1ae1900cb0fbd5=function(A){return Q(A).length},A.wbg.__wbg_subarray_58ad4efbb5bcb886=function(A,I,g){return E(Q(A).subarray(I>>>0,g>>>0))},A.wbg.__wbindgen_is_function=function(A){return "function"==typeof Q(A)},A.wbg.__wbindgen_object_drop_ref=function(A){G(A);},A.wbg.__wbg_instanceof_Module_09da91721979648d=function(A){let I;try{I=Q(A)instanceof WebAssembly.Module;}catch{I=!1;}return I},A.wbg.__wbg_instanceof_Table_aab62205c7444b79=function(A){let I;try{I=Q(A)instanceof WebAssembly.Table;}catch{I=!1;}return I},A.wbg.__wbg_get_19328b9e516e0330=function(){return R((function(A,I){return E(Q(A).get(I>>>0))}),arguments)},A.wbg.__wbg_instanceof_Memory_f1dc0d9a83a9c8ea=function(A){let I;try{I=Q(A)instanceof WebAssembly.Memory;}catch{I=!1;}return I},A.wbg.__wbg_get_765201544a2b6869=function(){return R((function(A,I){return E(Reflect.get(Q(A),Q(I)))}),arguments)},A.wbg.__wbg_getPrototypeOf_c046822345b14263=function(){return R((function(A){return E(Reflect.getPrototypeOf(Q(A)))}),arguments)},A.wbg.__wbg_set_bf3f89b92d5a34bf=function(){return R((function(A,I,g){return Reflect.set(Q(A),Q(I),Q(g))}),arguments)},A.wbg.__wbindgen_debug_string=function(A,I){const B=Y(N(Q(I)),g.__wbindgen_malloc,g.__wbindgen_realloc),C=M;h()[A/4+1]=C,h()[A/4+0]=B;},A.wbg.__wbindgen_throw=function(A,I){throw new Error(o(A,I))},A.wbg.__wbindgen_rethrow=function(A){throw G(A)},A.wbg.__wbindgen_is_symbol=function(A){return "symbol"==typeof Q(A)},A.wbg.__wbg_static_accessor_SYMBOL_45d4d15e3c4aeb33=function(){return E(Symbol)},A.wbg.__wbindgen_jsval_eq=function(A,I){return Q(A)===Q(I)},A.wbg.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be=function(A,I,g){return E(new Uint8Array(Q(A),I>>>0,g>>>0))},A.wbg.__wbindgen_string_get=function(A,I){const B=Q(I),C="string"==typeof B?B:void 0;var E=F(C)?0:Y(C,g.__wbindgen_malloc,g.__wbindgen_realloc),D=M;h()[A/4+1]=D,h()[A/4+0]=E;},A.wbg.__wbg_imports_5d97b92618ae2b69=function(A){return E(WebAssembly.Module.imports(Q(A)))},A.wbg.__wbg_length_6e3bbe7c8bd4dbd8=function(A){return Q(A).length},A.wbg.__wbg_instanceof_Global_6ae38baa556a9042=function(A){let I;try{I=Q(A)instanceof WebAssembly.Global;}catch{I=!1;}return I},A.wbg.__wbg_wasmerruntimeerror_new=function(A){return E(L.__wrap(A))},A.wbg.__wbg_constructor_20fd216941fe9866=function(A){return E(Q(A).constructor)},A.wbg.__wbindgen_number_get=function(A,I){const B=Q(I),C="number"==typeof B?B:void 0;(0===J.byteLength&&(J=new Float64Array(g.memory.buffer)),J)[A/8+1]=F(C)?0:C,h()[A/4+0]=!F(C);},A.wbg.__wbg_new0_a57059d72c5b7aee=function(){return E(new Date)},A.wbg.__wbg_getTime_cb82adb2556ed13e=function(A){return Q(A).getTime()},A.wbg.__wbg_getTimezoneOffset_89bd4275e1ca8341=function(A){return Q(A).getTimezoneOffset()},A.wbg.__wbg_new_0b9bfdd97583284e=function(){return E(new Object)},A.wbg.__wbindgen_bigint_from_u64=function(A){return E(BigInt.asUintN(64,A))},A.wbg.__wbg_new_1d9a920c6bfc44a8=function(){return E(new Array)},A.wbg.__wbg_new_8d2af00bc1e329ee=function(A,I){return E(new Error(o(A,I)))},A.wbg.__wbg_push_740e4b286702d964=function(A,I){return Q(A).push(Q(I))},A.wbg.__wbindgen_boolean_get=function(A){const I=Q(A);return "boolean"==typeof I?I?1:0:2},A.wbg.__wbg_instanceof_Object_595a1007518cbea3=function(A){let I;try{I=Q(A)instanceof Object;}catch{I=!1;}return I},A.wbg.__wbg_exports_1f32da4bc6734cea=function(A){return E(Q(A).exports)},A.wbg.__wbg_exports_4db28c393be16bc5=function(A){return E(WebAssembly.Module.exports(Q(A)))},A.wbg.__wbindgen_typeof=function(A){return E(typeof Q(A))},A.wbg.__wbg_isArray_27c46c67f498e15d=function(A){return Array.isArray(Q(A))},A.wbg.__wbg_entries_65a76a413fc91037=function(A){return E(Object.entries(Q(A)))},A.wbg.__wbg_instanceof_Instance_b0fc12339921a27e=function(A){let I;try{I=Q(A)instanceof WebAssembly.Instance;}catch{I=!1;}return I},A.wbg.__wbg_new_1c5d2ff1edfe6d73=function(){return R((function(A,I){return E(new WebAssembly.Instance(Q(A),Q(I)))}),arguments)},A.wbg.__wbg_newwithlength_7c42f7e738a9d5d3=function(A){return E(new Array(A>>>0))},A.wbg.__wbg_apply_75f7334893eef4ad=function(){return R((function(A,I,g){return E(Reflect.apply(Q(A),Q(I),Q(g)))}),arguments)},A.wbg.__wbindgen_function_table=function(){return E(g.__wbindgen_export_2)},A.wbg.__wbindgen_number_new=function(A){return E(A)},A.wbg.__wbg_bind_10dfe70e95d2a480=function(A,I,g,B){return E(Q(A).bind(Q(I),Q(g),Q(B)))},A.wbg.__wbg_randomFillSync_6894564c2c334c42=function(){return R((function(A,I,g){Q(A).randomFillSync(c(I,g));}),arguments)},A.wbg.__wbg_getRandomValues_805f1c3d65988a5a=function(){return R((function(A,I){Q(A).getRandomValues(Q(I));}),arguments)},A}function q(A,I){return g=A.exports,d.__wbindgen_wasm_module=I,J=new Float64Array,a=new Int32Array,i=new Uint8Array,g}async function d(A){void 0===A&&(A=new URL("wasmer_wasi_js_bg.wasm",(document.currentScript && document.currentScript.src || new URL('browser.script.iife.js', document.baseURI).href)));const I=H();("string"==typeof A||"function"==typeof Request&&A instanceof Request||"function"==typeof URL&&A instanceof URL)&&(A=fetch(A));const{instance:g,module:B}=await async function(A,I){if("function"==typeof Response&&A instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(A,I)}catch(I){if("application/wasm"==A.headers.get("Content-Type"))throw I;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",I);}const g=await A.arrayBuffer();return await WebAssembly.instantiate(g,I)}{const g=await WebAssembly.instantiate(A,I);return g instanceof WebAssembly.Instance?{instance:g,module:A}:g}}(await A,I);return q(g,B)}function Z(A){if(!/^data:/i.test(A))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');var I=(A=A.replace(/\r?\n/g,"")).indexOf(",");if(-1===I||I<=4)throw new TypeError("malformed data: URI");for(var g=A.substring(5,I).split(";"),B="",Q=!1,C=g[0]||"text/plain",E=C,D=1;D<g.length;D++)"base64"===g[D]?Q=!0:(E+=";".concat(g[D]),0===g[D].indexOf("charset=")&&(B=g[D].substring(8)));g[0]||B.length||(E+=";charset=US-ASCII",B="US-ASCII");var i=Q?"base64":"ascii",w=unescape(A.substring(I+1)),o=Buffer.from(w,i);return o.type=C,o.typeFull=E,o.charset=B,o}var b=null,n=function(g,B){return A(void 0,void 0,void 0,(function(){return I(this,(function(A){switch(A.label){case 0:return null!==b&&!0!==B?[3,3]:g?[3,2]:[4,WebAssembly.compile(Z("data:application/wasm;base64,AGFzbQEAAAABowRDYAJ/fwBgAX8AYAJ/fwF/YAN/f38AYAN/f38Bf2AEf39/fwBgAX8Bf2ABfwF+YAV/f39/fwBgBH9/f38Bf2AAAX9gBX9/f39/AX9gBn9/f39/fwBgA39/fwF+YAAAYAZ/f39/f38Bf2AHf39/f39/fwF/YAJ/fgF/YAN+f38Bf2AHf39/f39/fwBgA39/fgF/YAN/fn8AYAd/f39/f35/AX9gCH9/f39/f39/AX9gBn9/f35/fwBgAn5/AX9gA39/fgBgAX8BfGABfgF/YAV/f39+fgF/YAN+fn8BfmAEfn5/fwF+YAZ/f39+fn8Bf2AGf39/fn9/AX9gBH9+f38Bf2ACf34AYAN/fn8Bf2AFf39/fn8AYAV/f35/fwBgAn9/AX5gBH9/f34AYAF8AX9gCX9/f35/f39/fwBgC39/f39/f39+fn9/AX9gCX9/f39/f39/fwF/YAl/f39/f39+fn8Bf2AEf39/fgF/YAl/f39/f39/fn8AYAV/f39+fwF/YA9/f39/f39/f39/f39/f38Bf2AEf39+fgBgC39/f39/f39/f39/AX9gCH9/fn5/f35/AGAEfn5+fwF+YAR/f35/AX9gA35/fgF/YAV/f31/fwBgBH99f38AYAV/f3x/fwBgBH98f38AYAR/fn9/AGAFf39+f38Bf2ABfgBgAn5/AGAJf39/f39/f39/AGAGf39/f35/AGAHf39/fn9+fwF/AuAUSgN3YmcbX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmAAYDd2JnHV9fd2JnX2NyeXB0b19lMWQ1M2ExZDczZmIxMGI4AAYDd2JnHl9fd2JnX3Byb2Nlc3NfMDM4YzI2YmY0MmIwOTNmOAAGA3diZx9fX3diZ192ZXJzaW9uc19hYjM3MjE4ZDJmMGIyNGE4AAYDd2JnG19fd2JnX25vZGVfMDgwZjRiMTlkMTViYzFmZQAGA3diZxRfX3diaW5kZ2VuX2lzX3N0cmluZwAGA3diZx5fX3diZ19yZXF1aXJlXzc4YTNkY2ZiZGJhOWNiY2UACgN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAIDd2JnG19fd2JnX2NhbGxfMTY4ZGE4ODc3OWUzNWY2MQAEA3diZx9fX3diZ19tc0NyeXB0b182ZTdkM2UxZjkyNjEwY2JiAAYDd2JnJF9fd2JnX25ld3dpdGhsZW5ndGhfZjU5MzM4NTVlNGY0OGExOQAGA3diZxRfX3diaW5kZ2VuX2lzX29iamVjdAAGA3diZxpfX3diZ19nZXRfNTcyNDVjYzdkN2M3NjE5ZAACA3diZxtfX3diZ19jYWxsXzk3YWU5ZDg2NDVkYzM4OGIAAgN3YmcbX193Ymdfc2VsZl82ZDQ3OTUwNmY3MmM2YTcxAAoDd2JnHV9fd2JnX3dpbmRvd19mMjU1N2NjNzg0OTBhY2ViAAoDd2JnIV9fd2JnX2dsb2JhbFRoaXNfN2YyMDZiZGE2MjhkNTI4NgAKA3diZx1fX3diZ19nbG9iYWxfYmE3NWM1MGQxY2YzODRmNAAKA3diZxdfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZAAGA3diZyBfX3diZ19uZXdub2FyZ3NfYjViMDYzZmM2YzJmMDM3NgACA3diZypfX3diZ19pbnN0YW5jZW9mX0Z1bmN0aW9uXzA1NmQ1YjNhZWY4YWFhODUABgN3YmcRX193YmluZGdlbl9tZW1vcnkACgN3YmcdX193YmdfYnVmZmVyXzNmM2Q3NjRkNDc0N2Q1NjQABgN3YmcaX193YmdfbmV3XzhjM2YwMDUyMjcyYTQ1N2EABgN3YmcaX193Ymdfc2V0XzgzZGI5NjkwZjkzNTNlNzkAAwN3YmcdX193YmdfbGVuZ3RoXzllMWFlMTkwMGNiMGZiZDUABgN3YmcfX193Ymdfc3ViYXJyYXlfNThhZDRlZmJiNWJjYjg4NgAEA3diZxZfX3diaW5kZ2VuX2lzX2Z1bmN0aW9uAAYDd2JnGl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmAAEDd2JnKF9fd2JnX2luc3RhbmNlb2ZfTW9kdWxlXzA5ZGE5MTcyMTk3OTY0OGQABgN3YmcnX193YmdfaW5zdGFuY2VvZl9UYWJsZV9hYWI2MjIwNWM3NDQ0Yjc5AAYDd2JnGl9fd2JnX2dldF8xOTMyOGI5ZTUxNmUwMzMwAAIDd2JnKF9fd2JnX2luc3RhbmNlb2ZfTWVtb3J5X2YxZGMwZDlhODNhOWM4ZWEABgN3YmcaX193YmdfZ2V0Xzc2NTIwMTU0NGEyYjY4NjkAAgN3YmclX193YmdfZ2V0UHJvdG90eXBlT2ZfYzA0NjgyMjM0NWIxNDI2MwAGA3diZxpfX3diZ19zZXRfYmYzZjg5YjkyZDVhMzRiZgAEA3diZxdfX3diaW5kZ2VuX2RlYnVnX3N0cmluZwAAA3diZxBfX3diaW5kZ2VuX3Rocm93AAADd2JnEl9fd2JpbmRnZW5fcmV0aHJvdwABA3diZxRfX3diaW5kZ2VuX2lzX3N5bWJvbAAGA3diZy1fX3diZ19zdGF0aWNfYWNjZXNzb3JfU1lNQk9MXzQ1ZDRkMTVlM2M0YWViMzMACgN3YmcTX193YmluZGdlbl9qc3ZhbF9lcQACA3diZzFfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF9kOWFhMjY2NzAzY2I5OGJlAAQDd2JnFV9fd2JpbmRnZW5fc3RyaW5nX2dldAAAA3diZx5fX3diZ19pbXBvcnRzXzVkOTdiOTI2MThhZTJiNjkABgN3YmcdX193YmdfbGVuZ3RoXzZlM2JiZTdjOGJkNGRiZDgABgN3YmcoX193YmdfaW5zdGFuY2VvZl9HbG9iYWxfNmFlMzhiYWE1NTZhOTA0MgAGA3diZxxfX3diZ193YXNtZXJydW50aW1lZXJyb3JfbmV3AAYDd2JnIl9fd2JnX2NvbnN0cnVjdG9yXzIwZmQyMTY5NDFmZTk4NjYABgN3YmcVX193YmluZGdlbl9udW1iZXJfZ2V0AAADd2JnG19fd2JnX25ldzBfYTU3MDU5ZDcyYzViN2FlZQAKA3diZx5fX3diZ19nZXRUaW1lX2NiODJhZGIyNTU2ZWQxM2UAGwN3YmcoX193YmdfZ2V0VGltZXpvbmVPZmZzZXRfODliZDQyNzVlMWNhODM0MQAbA3diZxpfX3diZ19uZXdfMGI5YmZkZDk3NTgzMjg0ZQAKA3diZxpfX3diaW5kZ2VuX2JpZ2ludF9mcm9tX3U2NAAcA3diZxpfX3diZ19uZXdfMWQ5YTkyMGM2YmZjNDRhOAAKA3diZxpfX3diZ19uZXdfOGQyYWYwMGJjMWUzMjllZQACA3diZxtfX3diZ19wdXNoXzc0MGU0YjI4NjcwMmQ5NjQAAgN3YmcWX193YmluZGdlbl9ib29sZWFuX2dldAAGA3diZyhfX3diZ19pbnN0YW5jZW9mX09iamVjdF81OTVhMTAwNzUxOGNiZWEz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ZW1mc19fX3diZ2RfZG93bmNhc3RfdG9rZW4AoAkJbWVtZnNfbmV3ALUFDW1lbWZzX2Zyb21fanMArwUNbWVtZnNfcmVhZERpcgBrD21lbWZzX2NyZWF0ZURpcgCKAg9tZW1mc19yZW1vdmVEaXIAiwIQbWVtZnNfcmVtb3ZlRmlsZQCMAgxtZW1mc19yZW5hbWUA6wEObWVtZnNfbWV0YWRhdGEAwgEKbWVtZnNfb3BlbgB9GF9fd2JnX2pzdmlydHVhbGZpbGVfZnJlZQD8BBpqc3ZpcnR1YWxmaWxlX2xhc3RBY2Nlc3NlZACwBRpqc3ZpcnR1YWxmaWxlX2xhc3RNb2RpZmllZACxBRlqc3ZpcnR1YWxmaWxlX2NyZWF0ZWRUaW1lALIFEmpzdmlydHVhbGZpbGVfc2l6ZQCzBRdqc3ZpcnR1YWxmaWxlX3NldExlbmd0aACGAxJqc3ZpcnR1YWxmaWxlX3JlYWQApgMYanN2aXJ0dWFsZmlsZV9yZWFkU3RyaW5nAOEBE2pzdmlydHVhbGZpbGVfd3JpdGUAngIZanN2aXJ0dWFsZmlsZV93cml0ZVN0cmluZwCPAhNqc3ZpcnR1YWxmaWxlX2ZsdXNoAOICEmpzdmlydHVhbGZpbGVfc2VlawCUAg9fX3diZ193YXNpX2ZyZWUA/gMId2FzaV9uZXcASgd3YXNpX2ZzAIgDD3dhc2lfZ2V0SW1wb3J0cwBiEHdhc2lfaW5zdGFudGlhdGUA4QMKd2FzaV9zdGFydABdFHdhc2lfZ2V0U3Rkb3V0QnVmZmVyAP4BFHdhc2lfZ2V0U3Rkb3V0U3RyaW5nAP8BFHdhc2lfZ2V0U3RkZXJyQnVmZmVyAIACFHdhc2lfZ2V0U3RkZXJyU3RyaW5nAIECE3dhc2lfc2V0U3RkaW5CdWZmZXIA+wMTd2FzaV9zZXRTdGRpblN0cmluZwCFBBVjYW5vbmljYWxfYWJpX3JlYWxsb2MAqwYSY2Fub25pY2FsX2FiaV9mcmVlAMcIEV9fd2JpbmRnZW5fbWFsbG9jAKEGEl9fd2JpbmRnZW5fcmVhbGxvYwCPBxNfX3diaW5kZ2VuX2V4cG9ydF8yAQAUX193YmluZGdlbl9leG5fc3RvcmUApggfX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcgDrCA9f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mMzBADYCrAMgAiAFNgKoAyACKAKAAyEDIAIoAvgCIQUgAiACKAL8AiIENgL8DSACIAQ2AvQNIAIgBTYC8A0gAiAEIANBGGxqIgM2AvgNIAJBkA9qQQFyIQsgAkGUBmohDCACQaAGaiITQQJqIQ4CQAJAA0ACQCADIARHBEAgAiAEQRhqNgL0DSAEKAIEIgcNAQsgAkHwDWoQxAQgAigCzAMiBCACKALQA0EMbGohCUEAIQUCQANAIAQgCUYEQCACKALYAyIFIAIoAtwDQRhsaiEHAkACQAJAAkACQAJAAkADQCAFIAdGBEAgAigCuAMhAyACQQA2ArgDAn8gAwRAIAIoArwDDAELEIYCIQVBBBDXByIDIAU2AgBB3I/BAAshBSACQcgPakIINwMAIAJBwA9qQgA3AwAgAkG4D2pBADYCACACQgA3A7APIAJBsA9qQQQQmAEgAkHgAWoQ8wQgAkGsD2pBkNnBADYCACACQagPakEANgIAIAJCADcDoA8gAiACKQPoATcDmA8gAiACKQPgATcDkA8gAkGoCGogAkGQD2oiBEHAABCSCRogAkEAOgCkCCACQX82AqAIIAQgAkGgCGoQhAUgAigCkA8NAyACQZgPai0AACEMIAIoApQPIQYgAkHwA2ooAgAhBCACQfQDaigCACERIAIoAuQDIQ8gAigC6AMhEyACQdABahDzBCACKQPQASEcIAIpA9gBIR0gAkHAAWoQ8wQgAikDwAEhHiACKQPIASEfIAJB+A5qQZzbwQBBARCbBCACQZoPaiACQYAPaigCADYBACACQeAOakKAgICAwAA3AwAgAkHcDmpBADoAACACQegOakKAgICAMDcDACACQcQOakGQ2cEANgIAIAJBwA5qQQA2AgAgAkG4DmpCADcDACACQbAOaiAfNwMAIAJBqA5qIB43AwAgAkGkDmpBADoAACACIAIpA/gONwGSDyACQQA2AtgOIAJBADYCoA4gAkGQ2cEANgKMDiACQQA2AogOIAJCADcDgA4gAiAdNwP4DSACIBw3A/ANIAJB1A5qIAU2AgAgAkGSDmogAikBkA83AQAgAkGYDmogAkGWD2opAQA3AQAgAkEAOwGQDiACQoAINwPIDiACQQA6APAOIAIgAzYC0A5BDBDXByIFQQA2AgggBUKAgICAEDcCACACQfANaiIDIAZBCGoi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wBEgAkECNgKcDyACQdySwQA2ApgPIAJBAjYCpA8gAkEANgKQDyACQTY2ApQNIAJBNzYCjA0gAiACQYgNajYCoA8gAiACQcARajYCkA0gAiACQaARajYCiA0gAkGgDGogAkGQD2oQzAMgAigCoAwhByACKAKkDCIEDQQLIAJB4ABqIA4oAgAgEygCACAcIAlB+JDBABClBxCoBCACLQBkIQ0gAigCYCIEQaABaigCAEEORgRAIARBCGohFQJAIBsoAgAiFgRAIAJBoAxqIBYgBUEIaigCABCUBQwBCyACQZAPaiIFIAIoAqARIhYoAgQgFigCCBCfASACQaAMaiAFEIkGCyACQZAPaiIFIAIoAqQMIAIoAqgMEJQFIAJBiA1qIBUgBSAdIBQQ5QUgAikDiA1CAVEEQCACQZwPakECNgIAIAJBpA9qQQE2AgAgAkHYkMEANgKYDyACQQA2ApAPIAJBGDYCrBEgAiACQagRajYCoA8gAiACQaAMajYCqBEgAkGYC2ogAkGQD2oQzAMgAkEANgK0CyACKAKgDCACKAKkDBCGCCAEIA0QhwgMDgsgAigCoAwgAigCpAwQhggLIAQgDRCHCCACQZAPaiIFIBEQ+QQgAkHYAGogBUGIkcEAENkEIAItAFwhBSACKAJYIgRBCGogBxDkBSAEIAUQhwggA0EcaiEDDAELCyACQZgLaiACQfANakGIARCSCRogAigCtAsiA0UNCyACQYgKaiACQbALaigCADYCACACIAIpAJkLNwOICyACIAIpA6gLNwOACiACIAJBoAtqKQAANwCPCyACLQCYCyEFIAJBkApqIAJBuAtqQegAEJIJGiACIAIpAI8LNwD/CiACIAIpA4gLNwP4CiACQfgJaiACKQD/CjcAACACIAM2AowKIAIgBToA8AkgAiACKQP4CjcA8QkgAigCsAMhAyACQQA2ArADIAMNAgwDCyACIAItAIkNOgDAESACQZwPakEBNgIAIAJBpA9qQQE2AgAgAkHYk8EANgKYDyACQQA2ApAPIAJBNjYCrBEgAiACQagRajYCoA8gAiACQcARajYCqBEgAkGgDGpBBHIgAkGQD2oQzAMgAkEANgK0CyACIAIpA6gMNwKcCyACIAIoAqQMNgKYCwwJCyACQQA2ArQLIAIgAigCqAw2AqALIAIgBDYCnAsgAiAHNgKYCwwICyACQZAPaiACQfAJaiAGQUBrKAIAIAZBxABqKAIAQQAgAyACKAK0AxCBASACLQCQD0UEQCACIAIpApQPNwPwDSACQfANahDYBgwBCyACQQA2ApQHIAIgAi0AkQ86AIkGIAJBBzoAiAYMAQsgAigCoAMhAyACQQA2AqADAkACQCADBEAgAkGQD2ogAkHwCWogBkFAaygCACAGQcQAaigCAEEBIAMgAigCpAMQgQEgAi0AkA8NASACIAIpApQPNwPwDSACQfANahDYBgsgAigCqAMhAyACQQA2AqgDIAMEQCACQZAPaiACQfAJaiAGQUBrKAIAIAZBxABqKAIAQQIgAyACKAKsAxCBASACLQCQDw0CIAIgAikClA83A/ANIAJB8A1qENgGCwJAIAIoApgDIgMEQCACQfANaiADIAggAkHwCWogAigCnAMoAhQRBQAgAigC9A0NAQsgAkHoCGoiAyACQfAJakGIARCSCRogBiAMEIcIIAJBkA9qIANBiAEQkgkaIAJB8A1qIgMgAkGgCGpByAAQkgkaQdAAQQgQxwciDUKBgICAEDcDACANQQhqIANByAAQkgkaIAIoAswDIQMgAkHQAGogAigC0AMiERCMBSARQQxsIQVBACEEIAIoAlQhCiACKAJQIg8hBgNAIAZFIAQgBUZyRQRAIAJB8A1qIANBBGooAgAgA0EIaigCABCmBSACKQPwDSEcIAQgCmoiCEEIaiACQfgNaigCADYCACAIIBw3AgAgBEEMaiEEIANBDGohAyAGQQFrIQYMAQsLIAJBQGsQswYgAikDSCEcIAIpA0AhHSACQTBqELMGIAIpAzghHiACKQMwIR8gAkEgahCzBiACKQMoISAgAikDICEhIAIoAtgDIQQgAkEYaiACKALcAyIDEIwFIAJBADYCmAggAiACKAIcIgY2ApQIIAIgAigCGCIINgKQCEEAIQUgA0EYbCEHIAMgCEsEQCACQRBqIAJBkAhqQQAgAxD1AiACKAIQIAIoAhQQqQcgAigClAghBiACKAKYCCEFCyAGIAVBDGxqIQMDQCAHBEAgAkEIaiAEKAIIIgYgBEEUaigCACITakEBakEAEJEEIAJBADYC+A0gAiACKQMINwPwDSACQfANaiAEKAIEIAYQ3gYgAigC+A0iBiACKALwDUYEQCACQfANaiELIwBBIGsi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ACAHQcABakEAIAogAyAOQQV0aiAKQQV0IgNrIApB5OvBABC3BSAHKALAASADakEgayEDIAcoAsQBIRACQANAIAYgCmoiDUUNAyAGIAxqRQ0BIBAgDUEBa0sEQCAHQZgEaiINIABBGGoiDykDADcDACAHQZAEaiIRIABBEGoiEykDADcDACAHQYgEaiIWIABBCGoiFSkDADcDACAHIAApAwA3A4AEIA8gA0EYaiIPKQMANwMAIBMgA0EQaiITKQMANwMAIBUgA0EIaiIVKQMANwMAIAAgAykDADcDACAPIA0pAwA3AwAgEyARKQMANwMAIBUgFikDADcDACADIAcpA4AENwMAIANBIGshAyAGQQFrIQYgAEEgaiEADAELCyAOQQF2IAZqQQFrIBBBhOzBABD/AwALIAwgDEH068EAEP8DAAtBACEBCyACIAFrIQADQCABQQAgAEEKSRsEQCAHQagBaiABQQFrIgEgAiAJIAhB8OzBABC3BSAHKAKoASAHKAKsARDLASAAQQFqIQAMAQUgB0GwA2ogASAAEMMFA0AgB0G4AWogBygCtAMiACAHKAK4AyICEMACIAcoArwBIQwgBygCuAFBAUcEQCABIQIMBAsCQAJAAkAgAiAMQQFqIhBLBEAgAiAMSwRAIAAgEEEDdGoiAigCBCEOIAdBsAFqIAIoAgAiFiAAIAxBA3QiFWoiACgCBCIaIAAoAgBqIAkgCEGg7cEAELcFIAcoArABIgMgDkEFdCICaiEAIAMgBygCtAEiBkEFdGohDSAGIA5rIgYgDk8NAiASIAAgBkEFdCICEJIJIgogAmohBiANQSBrIQIDQCAAIANNIAYgCk1yDQQgAiAAQSBrIg0gBkEgayIPIA9BBGooAgAgD0EIaigCACANQQRqKAIAIA1BCGooAgAQqQZB/wFxQf8BRiITGyIRKQMANwMAIAJBGGogEUEYaikDADcDACACQRBqIBFBEGopAwA3AwAgAkEIaiARQQhqKQMANwMAIAYgDyATGyEGIA0gACATGyEAIAJBIGshAgwACwALIAwgAkGQ7cEAEP8DAAsgECACQYDtwQAQ/wMACyACIBIgAyACEJIJIgJqIQYDQCACIAZPIAAgDU9yDQIgAyAAIAIgAEEEaigCACAAQQhqKAIAIAJBBGooAgAgAkEIaigCABCpBkH/AXEiD0H/AUYiERsiCikDADcDACADQRhqIApBGGopAwA3AwAgA0EQaiAKQRBqKQMANwMAIANBCGogCkEIaikDADcDACACIA9B/wFHQQV0aiECIAAgEUEFdGohACADQSBqIQMMAAsACyAAIQMgCiECCyADIAIgBiACaxCSCRogBygCuAMiACAMSwRAIAcoArQDIBVqIgAgDiAaajYCBCAAIBY2AgAgB0GwA2ogEBCHBQwBCwsgDCAAQbDtwQAQ/wMACwALAAsACyAIQQJJDQAgCEEFdCAJakFAaiEDQQEhAANAIAAgCEYNASADIABBAWoiABDLASADQSBrIQMMAAsACwwFCyADIAlqIgAgBykDgAQ3AwAgAEEYaiAGKQMANwMAIABBEGogDCkDADcDACAAQQhqIA4pAwA3AwAgA0EgaiEDIAhBAWohCAwACwALIAdBgARqIAFB0AFqKAIAIAFB1AFqKAIAIAhBPGooAgAgCEFAaygCABC6BCAHKAKIBEUEQCAHLQCABCEADAELQQghAyAHQegCaiAHQYgEaikDACIbNwMAIAcgBykDgAQiHDcD4AIgB0EZOgCgAyAHQYgDaiIAIBs3AwAgByAcNwOAAyAHIAdBoANqNgKQAyAHQYAEaiAHQYADahC5AQJAIActAKAEQQNGBEAgB0GAA2oQ/AZBACEAQQAhBkEAIQkMAQsgB0GYAWoQuAQgBygCmAEhASAHKAKcASICIAdBgARqQTgQlAkhAyAHQQE2AtgEIAcgAzYC1AQgByABNgLQBCAHQcADaiAHQZADaigCADYCACAHQbgDaiAAKQMANwMAIAcgBykDgAM3A7ADQTghA0EBIQADQCAHQYAEaiAHQbADahC5AQJAIActAKAEQQNHBEAgACAHKALQBEcNASAHQdAEahDaAiAHKALUBCECDAELIAdBsANqEPwGIAcoAtAEIgZBCHYhCSACIQMMAgsgAiADaiAHQYAEakE4EJIJGiAHIABBAWoiADYC2AQgA0E4aiEDDAALAAsCQAJAIActAKADIgJBGUcEQCADIAAQ6QUgBkH/AXEgCUEIdHIgAxDjBwwBCyADDQEgBiECCyACEO4HQf8BcSEADAELIAdBzQA6AKADIAcgAzYCjAMgByADIABBOGxqNgKIAyAHIAM2AoQDQQghASAHIAZB/wFxIAlBCHRyNgKAAyAHIAdBoANqNgKQAyAHQYAEaiAHQYADahC9AQJAIActAIwEQQlGBEAgB0GAA2oQ/gRBACECQQAhBkEAIQMMAQsgB0GQAWpBBBClBCAHQYgEaiIGKQMAIRsgB0GQBGoiCSkDACEcIAcoApABIQAgBygClAEiASAHKQOABDcDACABQRBqIBw3AwAgAUEIaiAbNwMAIAdBATYC6AIgByABNgLkAiAHIAA2AuACIAdBwANqIAdBkANqKAIANgIAIAdBuANqIAdBiANqKQMANwMAIAcgBykDgAM3A7ADQRghAEEBIQIDQCAHQYAEaiAHQbADahC9AQJAIActAIwEQQlHBEAgAiAHKALgAkcNASAHQeACakEBEMQFIAcoAuQCIQEMAQsgB0GABGoQrAcgB0GwA2oQ/gQgBygC4AIiBkEIdiEDDAILIAYpAwAhGyAJKQMAIRwgACABaiIDIAcpA4AENwMAIANBEGogHDcDACADQQhqIBs3AwAgByACQQFqIgI2AugCIABBGGohAAwACwALIActAKADIgBBzQBHBEAgASACEIAGIAZB/wFxIANBCHRyIAEQzQcMAQsgAQ0BIAYhAAsgFCAUKAIAQQFrNgIADAgLIAcgAjYC2AQgByABNgLUBCAHIAY6ANAEIAcgAzsA0QQgByADQRB2OgDTBCAHQYAEaiAIEJ4FIAdByANqIAdBmARqIgApAwAiGzcDACAHQcADaiAHQZAEaiIDKQMAIhw3AwAgB0G4A2ogB0GIBGoiBikDACIdNwMAIAcgBykDgAQiHzcDsAMgACAbNwMAIAMgHDcDACAGIB03AwAgByAfNwOABCAHIAdBsAJqIgM2AqgEIAcgAzYCoAQDQCAHQYgBaiAHQYAEahCDBwJAIAcoAogBIgNFBEBBACEDDAELIAcoAqAEKAIAIgBBOGooAgAgAEE8aigCACAHKAKMASIAKQMAIAAoAghBsIDAABClBy0AhAJFDQELAkAgA0UEQCAHQQk6AIwDIAdBgANqEKwHIAdBgARqIgBBnsrBAEEBEJsEIAdCADcDkAQgB0EDOgCMBCAHQdAEaiIBIAAQxwQgAEHAlcEAQQIQmwQgB0IANwOQBCAHQQM6AIwEIAEgABDHBCAHKALUBCEKIAcoAtgEIglBFU8EQCAHQYABaiAJQQF2EKUEIAcoAoQBIQwgBygCgAEhEyAHQQA2ArgDIAdCgICAgMAANwOwAyAKQcQAayEXQQQhACAJIQIDQCACRQRAIAcoArADIAAQ2wcgDEEAEIAGIBMgDBDNBwwECwJAAkAgAkEBayIBRQ0AIAogAUEYbGoiAEEEaigCACAAQQhqKAIAIAJBGGwiAyAKakEwayIAQQRqKAIAIABBCGooAgAQqQZB/wFxQf8BRwRAIAMgF2ohAANAIAFBAUYNAiAAQQRqIQMgAEEcaiEGIABBGGohCCAAKAIAIQsgAEEYayEAIAFBAWshASAIKAIAIAYoAgAgCyADKAIAEKkGQf8BcUH/AUcNAAsMAgsDQAJAQQAhBiABQQFGBEBBACEBDAELIAMgCmohACADQRhrIQMgAUEBayEBIABBLGsoAgAgAEEoaygCACAAQcQAaygCACAAQUBqKAIAEKkGQf8BcUH/AUYNAQsLIAdB+ABqIAEgAiAKIAlB4OzBABC4BSAHQfAAakEAIAcoAnwiDkEBdiIIIAcoAngiAyAIQdTrwQAQuAUgBygCdCELIAcoAnAhACAHQegAakEAIAggAyAOQRhsaiAIQWhsaiAIQeTrwQAQuAUgBygCaCAIQRhsakEYayEDIAcoAmwhEgJAA0AgBiAIaiIQRQ0DIAYgC2pFDQEgEiAQQQFrSwRAIAdBkARqIhAgAEEQaiINKQMANwMAIAdBiARqIg8gAEEIaiIRKQMANwMAIAcgACkDADcDgAQgDSADQRBqIg0pAwA3AwAgESADQQhqIhEpAwA3AwAgACADKQMANwMAIA0gECkDADcDACARIA8pAwA3AwAgAyAHKQOABDcDACADQRhrIQMgBkEBayEGIABBGGohAAwBCwsgDkEBdiAGakEBayASQYTswQAQ/wMACyALIAtB9OvBABD/AwALQQAhAQsgAiABayEAA0AgAUEAIABBCkkbBEAgB0HQAGogAUEBayIBIAIgCiAJQfDswQAQuAUgBygCUCAHKAJUEOMBIABBAWohAAwBBSAHQbADaiABIAAQwwUDQCAHQeAAaiAHKAK0AyIAIAcoArgDIgIQwAIgBygCZCELIAcoAmBBAUcEQCABIQIMBAsCQAJAAkAgAiALQQFqIhJLBEAgAiALSwRAIAAgEkEDdGoiAigCBCEOIAdB2ABqIAIoAgAiGCAAIAtBA3QiFmoiACgCBCIVIAAoAgBqIAogCUGg7cEAELgFIAcoAlgiAyAOQRhsIgJqIQAgAyAHKAJcIgZBGGxqIRAgBiAOayIGIA5PDQIgDCAAIAZBGGwiAhCSCSIIIAJqIQYgEEEYayECA0AgACADTSAGIAhNcg0EIAIgAEEYayIQIAZBGGsiDSANQQRqKAIAIA1BCGooAgAgEEEEaigCACAQQQhqKAIAEKkGQf8BcUH/AUYiDxsiESkDADcDACACQRBqIBFBEGopAwA3AwAgAkEIaiARQQhqKQMANwMAIAYgDSAPGyEGIBAgACAPGyEAIAJBGGshAgwACwALIAsgAkGQ7cEAEP8DAAsgEiACQYDtwQAQ/wMACyACIAwgAyACEJIJIgJqIQYDQCACIAZPIAAgEE9yDQIgAyAAIAIgAEEEaigCACAAQQhqKAIAIAJBBGooAgAgAkEIaigCABCpBkH/AXEiDUH/AUYiDxsiCCkDADcDACADQRBqIAhBEGopAwA3AwAgA0EIaiAIQQhqKQMANwMAIAIgDUH/AUdBGGxqIQIgACAPQRhsaiEAIANBGGohAwwACwALIAAhAyAIIQILIAMgAiAGIAJrEJIJGiAHKAK4AyIAIAtLBEAgBygCtAMgFmoiACAOIBVqNgIEIAAgGDYCACAHQbADaiASEIcFDAELCyALIABBsO3BABD/AwALAAsACwALIAlBAkkNASAJQRhsIApqQTBrIQNBASEAA0AgACAJRg0CIAMgAEEBaiIAEOMBIANBGGshAwwACwALIAcoAqgEKAIAIgNBOGooAgAgA0E8aigCACAAKQMAIAAoAghBkIDAABClByIAKAKwASIDQQBIDQUgACADQQFqNgKwAQJAIABBtAFqLQAARQRAIAdBgANqIABB/AFqKAIAIABBgAJqKAIAEJQFIAAgACgCsAFBAWs2ArABIAcgAEHAAWopAwA3A5ADIAcgAEHIAWotAAA6AIwDIAIgBygC0ARHDQEgB0HQBGpBARDEBSAHKALUBCEBDAELIAcgAEGwAWo2AuQCIAcgAEG4AWo2AuACQbD7wQBBKyAHQeACakHsj8AAQaCAwAAQ6QMACyAHQYgDaikDACEbIAdBkANqKQMAIRwgASACQRhsaiIAIAcpA4ADNwMAIABBEGogHDcDACAAQQhqIBs3AwAgByACQQFqIgI2AtgEDAELCyAHQdgCaiAHQdgEaigCADYCACAHIAcpA9AENwPQAgwBCyAHQaABaiAIEKUEIAdBADYC2AIgByAHKQOgATcD0AIgB0HQAmogCBDEBSAJIAhBBXQiCmohCCAHKALUAiAHKALYAiIBQRhsaiECQQAhBiAJIQMCfwNAIAggBiAKRg0BGiADKAIEBEAgAygCBCEMIAMoAgAhDSAHKAKwAiIAQThqKAIAIABBPGooAgAgAykDECADKAIYQfzawQAQpQciACgCsAEiEkEASA0FIAAgEkEBajYCsAEgAEG0AWotAAANBCADQSBqIQMgB0EBNgKMBCAHQaDbwQA2AogEIAdBATYClAQgB0EANgKABCAHQRg2AoQDIAcgAEH4AWo2AoADIAcgB0GAA2o2ApAEIAdBsANqIAdBgARqEMwDIAdBwANqIhIgAEHAAWopAwA3AwAgACAAKAKwAUEBazYCsAEgByAAQcgBai0AADoAvAMgDSAMEIYIIAJBEGogEikDADcDACACQQhqIAdBuANqKQMANwMAIAIgBykDsAM3AwAgBkEgaiEGIAJBGGohAiABQQFqIQEMAQsLIAYgCWpBIGoLIQAgByABNgLYAiAIIABrIQMDQCADBEAgACgCACAAQQRqKAIAEIYIIANBIGshAyAAQSBqIQAMAQsLIAsgCRDlBwsgFCAUKAIAQQFrNgIAIAcoAtQCIgYgBygC2AJBGGxqIRQgB0GIA2ohCCAHQbwEaiEOIAdBpARqIRIgB0GUBGohECAHQYAEakEEciENIAWnIQBBACEKA0ACQCAARQRAIAYgFEcNAQwFCyAUIAZrQRhuIABNDQQgBiAAQRhsaiEGCyAGLQAMIQAgBigCCCEMIAYpAxAhGyAHQoCAgICAATcC9AMgByAbNwLsAyAHQQE2AugDIAdBAToA5AMgB0KAgICAgAE3AtwDIAcgBUIBfCIFNwLUAyAHQQE2AtADIAcgDDYCzAMgB0EENgLIAyAHQgE3A8ADIAcgADYCvAMgB0EENgK4AyAHQgE3A7ADIAdBgANqIAdBsANqENcCAkAgBygChANBAUYEQCAHQcgAaiAHKAKIA0EAEJEEIAdBADYCqAMgByAHKQNINwOgAyAHQYAEaiIAIAdBsANqQcwAEJIJGiAHQYADaiAAENcCIAcoAoQDQQFGBEAgB0GgA2ogBygCiAMQpAcgBygCqAMhACAHKAKkAyELIAdB2ARqIgIgDUEIaigCADYCACAHIA0pAgA3A9AEIAcoAoAEIQMCQCAHKAKQBCIJQQJGDQAgBygCuAQhASAHKAKgBCEPIAdB6AJqIhEgEEEIaigCADYCACAHIBApAgA3A+ACAkAgAUECRg0AAkAgD0EBRw0AIAggEkEIaikCADcDACAHIBIpAgA3A4ADA0AgB0FAayAIEKoGIAcoAkBBAUcNASAAIAtqIAcoAkQgB0GAA2pqLQAAOgAAIABBAWohAAwACwALIAFBAUcNACAIIA5BCGopAgA3AwAgByAOKQIANwOAAwNAIAdBOGogCBCqBiAHKAI4QQFHDQEgACALaiAHKAI8IAdBgANqai0AADoAACAAQQFqIQAMAAsACyAJQQFHDQAgCCARKAIANgIAIAcgBykD4AI3A4ADA0AgB0EwaiAHQYADahCqBiAHKAIwQQFHDQEgACALaiAIIAcoAjRqLQAAOgAAIABBAWohAAwACwALAkAgA0EBRw0AIAggAigCADYCACAHIAcpA9AENwOAAwNAIAdBKGogB0GAA2oQqgYgBygCKEEBRw0BIAAgC2ogCCAHKAIsai0AADoAACAAQQFqIQAMAAsACyAHIAA2AqgDIAcgADYCsAMgAEEYRg0CIAdBADYCiAQgB0GwA2pBlJTCACAHQYAEakH8lMIAEKwEAAsgB0GMA2pBATYCACAHQZQDakEANgIAIAdBoJXCADYCiAMgB0GolcIANgKQAyAHQQA2AoADIAdBgANqQeSWwgAQgQYACyAHQYwEakEBNgIAIAdBlARqQQA2AgAgB0GglcIANgKIBCAHQaiVwgA2ApAEIAdBADYCgAQgB0GABGpBiJbCABCBBgALIAZBGGohAkEYIAQgCmsiASABQRhPGyEJQQAhAwNAAkACQCADIAlHIANBGEdxRQRAIAkgCmohCgJAIAFBF00NAEEAIAQgCmsiDyAMIAwgD0sbIhFrIQMgBigCCCEBIAYoAgQhBiAKIQkDQCADQQAgARtFBEAgCiARaiEKIAwgD0sNAiAHKAKgAyALEIYIQQAhACACIQYMBwsgBi0AACEAIAdBkARqIAdByAJqKQMANwMAIAdBiARqIAdBwAJqKQMANwMAIAcgBykDuAI3A4AEIAdBCGogB0GABGogCa0QrQYgBykDCCAHKAIQIAAQtgZB/wFxEIgHQf8BcSIAQc0ARw0DIANBAWohAyABQQFrIQEgCUEBaiEJIAZBAWohBgwACwALIAcoAqADIAsQhggMBwsgB0GQBGogB0HIAmopAwA3AwAgB0GIBGogB0HAAmopAwA3AwAgByAHKQO4AjcDgAQgB0EYaiAHQYAEaiADIApqrRCtBiAHKQMYIAcoAiAgAyALai0AABC2BkH/AXEQiAdB/wFxIgBBzQBGDQELIAcoAqADIAsQhggMBgsgA0EBaiEDDAALAAsACyAHIABBsAFqNgKEBCAHIABBuAFqNgKABEGw+8EAQSsgB0GABGpBkODBAEGM28EAEOkDAAsACyAeIBkgChC4BkH/AXEQiAdB/wFxIgBBzQBGDQELIAdB0AJqEIkHDAELIAdB0AJqEIkHIAcoArQCIgAgACgCAEEBazYCACAHKAKoAhCLCEEAIQAMAQsgBygCtAIiASABKAIAQQFrNgIAIAcoAqgCEIsICyAHQeAEaiQAIABB/wFxC8owAhR/BH4jAEGAB2siBSQAAkACQAJ/An8CQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCACEPIIRQRAIAIQQQ0BQajQwQBB7AAQOCEGQQEhB0EBDA8LIAVBoAJqQQA2AgAgBSACNgKYAiAFQQA2AoQCIAVBiAVqIAEgAhCaAiAFKAKIBSEGIAUoAqQFIglFDQsgBUG8AmogBUGcBWopAgA3AgAgBUG0AmogBUGUBWopAgA3AgAgBSAFKQKMBTcCrAIgBSAJNgLEAiAFIAY2AqgCQQEhCyADQQFGIhcEQCAFIAQ2AqQEIAVBqARqIAIQpAEgBUGIAWoQswYgBUG8BmpBkNnBADYCACAFQbgGakEANgIAIAVCADcDsAYgBSAFKQOQATcDqAYgBSAFKQOIATcDoAYgBUGwBmoiCUEAIAVBoAZqEMIHIAVB4AZqIAVBuARqKAIANgIAIAVB2AZqIAVBsARqKQMAIhk3AwAgBSAFKQOoBDcD0AYgAUH4AGohDCAFQaAFaiELIAVB8ANqIQggBUGgA2ohEyAFQeQDaiEPIBmnIQogBSgC1AYhBiAFQaEFaiIOQQ9qIRQCQANAIAYgCkYNASAGLQAYIgdBBEcEQCAFQZgFaiINIAZBEGopAgA3AwAgBUGQBWoiECAGQQhqKQIAIhk3AwAgDiAGKQAZNwAAIA5BCGogBkEhaikAADcAACAUIAZBKGooAAA2AAAgBSAHOgCgBSAFIAYpAgA3A4gFIAVB2ANqIgcgBSgCjAUiESAZpxCbBCAPIA0oAgAiEiAFKAKcBRCbBCATIAsQkQMgBUGYA2oiFSAFQegDaikDADcDACAFQZADaiIWIAVB4ANqKQMANwMAIAUgBSkD2AM3A4gDIAUoAogFIBEQhgggBSgClAUgEhCGCCALELUGIAcgBUGIA2pBLBCSCRogBUH4BmoiESAVKQMANwMAIAVB8AZqIhIgFikDADcDACAFIAUpA4gDNwPoBiAFKQOgBiAFKQOoBiAFQegGaiIHELYBIRkgBSAHNgL4BCAFIAk2AowFIAUgBUH4BGo2AogFIAVBgAFqIAUoArAGIAUoArwGIBkgBUGIBWpBxAAQmAMCQCAFKAKAAUEAIAUoArwGIgcbRQRAIAsgCCkCADcCACANIBEpAwA3AwAgECASKQMANwMAIAtBCGogCEEIaikCADcCACALQRBqIAhBEGooAgA2AgAgBSAFKQPoBjcDiAUgByAFKAKwBiIQIAcgGRCMBCINai0AAEEBcSERIAUgBSgCtAYiEiARRXIEfyASBSAJQQEgBUGgBmoQwgcgBSgCsAYiECAFKAK8BiIHIBkQjAQhDSAFKAK0BgsgEWs2ArQGIBAgByANIBkQyQYgBSAFKAK4BkEBajYCuAYgBSgCvAYgDUFUbGpBLGsgBUGIBWpBLBCSCRoMAQsgByAFKAKEAUFUbGpBLGsiBykCGCEZIAcgCCkCADcCGCANIAdBKGoiDSgCADYCACAQIAdBIGoiBykCADcDACAHIAhBCGopAgA3AgAgDSAIQRBqKAIANgIAIAUgGTcDiAUgBUHoBmoQhQcgBS0AiAVBBEYNACAFQYgFahC1BgsgBkEsaiEGDAELCyAGQSxqIQoLIAUgCjYC1AYgBUHQBmoQtAMgBUHwAGoQ8wQgBUH0A2pBkNnBADYCACAFQfADakEANgIAIAVCADcD6AMgBSAFKQN4NwPgAyAFIAUpA3A3A9gDIAUgBBBAIgg2ArwEIAUgCBAtNgLEBCAFQQA2AsAEIAUgBUG8BGo2AsgEIAVBnAVqIRAgBUHoBmpBBHIhESAFQdwGaiETIAVB6ANqIQ0DQCAFQegAaiAFQcAEahC5BSAFKAJoIhVFBEAgBUG8BGoQ1QcgBUGAA2ogDUEIaigCADYCACAFIA0pAwA3A/gCIAUoAtgDIQYgBSkC3AMhGSAFKALkAyEHIAUoAvQDIQsMBQsgBSAFKAJsIgg2AswEIAUgCEEAEAwiBjYC6AYgBUGIBWoiByAGEIoEIAVBiANqIAdBlPLBABC7BiAFQdAEaiAFKAKMAyIGIAUoApADEJQFIAUoAogDIAYQhgggBUHoBmoQ1QcgBSAIQQEQDCIINgLgBCAFIAgQQCIINgLkBCAFIAgQLTYC7AQgBUEANgLoBCAFIAVB5ARqNgLwBANAIAVB4ABqIAVB6ARqELkFIAUoAmBFBEAgBUHkBGoQ1QcgBUHgBGoQ1QcgBSgC0AQgBSgC1AQQhgggBUHMBGoQ1QcMAgsgBSAFKAJkIgg2AvQEIAUgCEEAEAwiBjYC6AYgBUGIBWoiByAGEIoEIAVBiANqIAdBpPLBABC7BiAFQfgEaiAFKAKMAyIGIAUoApADEJQFIAUoAogDIAYQhgggBUHoBmoQ1QcgCEEBEAwhCiAFQdAGaiAFKALUBCIWIAUoAtgEEJQFIBNBCGogBUGABWooAgA2AgAgEyAFKQP4BDcCACAFKAK4BkUNBCAFKQOgBiAFKQOoBiAFQdAGahC2ASEZIAUoArAGIgYgGadxIQcgGUIZiEL/AINCgYKEiJCgwIABfiEbQQAhCyAFKALkBiEYIAUoAuAGIQ8gBSgC2AYhDiAFKALUBiEUIAUoArwGIRIDQCAHIBJqKQAAIhogG4UiGUJ/hSAZQoGChIiQoMCAAX2DQoCBgoSIkKDAgH+DIRkDQCAZUARAIBogGkIBhoNCgIGChIiQoMCAf4NCAFINByAHIAtBCGoiC2ogBnEhBwwCCyAZeiEcIBlCAX0gGYMhGSAUIA4gEiAcp0EDdiAHaiAGcUFUbGpBLGsiCEEEaigCACAIQQhqKAIAEOgIRQ0AIA8gGCAIQRBqKAIAIAhBFGooAgAQ6AhFDQALCwJ+AkACQAJAAkACQAJAAkACQCAILQAYQQFrDgMBAAMCCyAIKAIoIQYgCCgCJCEHIAgoAiAhCyAIKAIcIQggChDzCA0EQZXIwQBBJ0GkycEAEOsGAAsgCC0AGiEGIAgtABkhCCAKEPsIDQVBlcjBAEEnQbTJwQAQ6wYACyAFQShqIAgoAhwgCEEgaigCABDyBCAFKAIsIQYgBSgCKCEHIAVBIGogCCgCJCAIQShqKAIAEPIEIAUoAiQhCCAFKAIgIQsgChDvCA0BQZXIwQBBJ0HEycEAEOsGAAsgCCgCKCEGIAgoAiQhByAIKAIgIQsgCCgCHCEIIAoQ9AgNAiAFQYgDaiAKED4iCxCKBCAFIAUoAowDBH8gESAFKQOIAzcCACARQQhqIAVBkANqKAIANgIAQQEFQQILNgLoBiAFQQc2ApADIAVBiMjBADYCjANBACEHIAVBADYCiAMgBUGIBWogBUHoBmogBUGIA2oQtAUgBUEGNgKgBSAFQY/IwQA2ApwFIAVBsARqIgggEEEIaigCADYCACAFIBApAgA3A6gEIAUoAogFIQ4gBSgCjAUhBiAFKQOQBSEZIAsQiwggChCLCCAFQYADaiAIKAIANgIAIAUgBSkDqAQ3A/gCIAUoAtAGIBQQhgggBSgC3AYgDxCGCCAFQfQEahDVByAFQeQEahDVByAFQeAEahDVByAFKALQBCAWEIYIIAVBzARqENUHIAVBvARqENUHIA0Q1gMMCgsgDCgCACEPIAUgCjYCmAUgBSAINgKUBSAFIAs2ApAFIAUgBjYCjAUgBSAHNgKIBSAPIAVBiAVqEPcDIQZCACEZIAwoAgApAwAMAwsgDCgCACEPIAUgCjYCmAUgBSAGNgKUBSAFIAc2ApAFIAUgCzYCjAUgBSAINgKIBSAFQUBrIAwgDyAFQYgFahD4AxCFCEICIRkgBSgCSCEGIAUpA0AMAgsgDCgCACEPIAUgCjYCmAUgBSAGNgKUBSAFIAc2ApAFIAUgCzYCjAUgBSAINgKIBSAFQdAAaiAMIA8gBUGIBWoQ+QMQhQhCAyEZIAUoAlghBiAFKQNQDAELIAVBMGogDCAMKAIAIAqtIAatQv8Bg0IohiAIrUL/AYNCIIaEhBDOBBCFCEIBIRkgBSgCOCEGIAUpAzALIRogBUGYA2ogBUHgBmopAwA3AwAgBUGQA2ogBUHYBmopAwA3AwAgBSAFKQPQBjcDiAMgBSAGNgKYBSAFIBo3A5AFIAUgGTcDiAUgBUHoBmogBUHYA2ogBUGIA2ogBUGIBWoQpgEgBUH0BGoQ1QcMAAsACwALIAVB4AJqIAVBwAJqKQMANwMAIAVB2AJqIAVBuAJqKQMANwMAIAVB0AJqIAVBsAJqKQMANwMAIAUgBSkDqAI3A8gCDAMLIAEpAxBCAFIEQCABQRBqIAEoAngQ6AMoAgAQACEGQQEMDgsgASgCiAEhCUG8z8EAQdYAEDghBiAJRQRAQQEhB0EBDA4LIAYQiwggBUGIBWogAUH4AGogAUGMAWogAhBRIAUpA4gFIhlCAFIEQCAFKAKQBSECIAVBpAFqIAVBlAVqQdwAEJIJGiAFIAI2AqABIAUgGTcDmAEMBAsgBUHYA2oiASAFQZAFakHAABCSCRogBUGUA2pBATYCACAFQZwDakEBNgIAIAVBhNLBADYCkAMgBUEANgKIAyAFQcUANgL0BSAFIAVB8AVqNgKYAyAFIAE2AvAFIAVBoAZqIAVBiANqEMwDIAUoAqQGIgkgBSgCqAYQOCEGIAUoAqAGIAkQhgggARDwAkEBDAwLQff4wQBBK0G08sEAEJEFAAsgCSgCACIQBEACQCAJKAIIIgxFBEAgCUEMaigCACEJDAELIAkoAgwiCUEIaiENIAkpAwBCf4VCgIGChIiQoMCAf4MhGiAJIQgDQCAMRQ0BA0AgGlAEQCAIQeACayEIIA0pAwBCf4VCgIGChIiQoMCAf4MhGiANQQhqIQ0MAQsLIAggGnqnQQN2QVRsaiIKQSxrEIUHIAxBAWshDCAaQgF9IBqDIRogCkEUay0AAA0AIApBEGsoAgAgCkEMaygCABCkCCAKQQhrKAIAIApBBGsoAgAQpAgMAAsACyAQIAlBLEEIEOgFCyAFQaQEahDVByAVBEAgBUGkBWogBUGAA2ooAgA2AgAgBSAHNgKYBSAFIBk3A5AFIAUgBjYCjAUgBSAONgKIBSAFIAUpA/gCNwKcBSAFQeQDakEBNgIAIAVB7ANqQQE2AgAgBUGw0cEANgLgAyAFQQA2AtgDIAVBxgA2AqQGIAUgBUGgBmo2AugDIAUgBUGIBWoiATYCoAYgBUGIA2ogBUHYA2oQzAMgBSgCjAMiCSAFKAKQAxA4IQYgBSgCiAMgCRCGCCABELkEDAcLIAVB8AJqIgkgBUGAA2ooAgA2AgAgBSAFKQP4AjcD6AIgC0UNBiAFQYgGaiAJKAIANgIAIAUgBzYC/AUgBSAZNwL0BSAFIAUpA+gCNwOABiAFIAs2AowGIAUgBjYC8AUgBUGIA2oiCSAFQagCahC3ASAFQdgDaiAJQTAQkgkaIAVB9AZqIQYgBUGgBWohCQNAIAVBiAVqIAVB2ANqEPsGIAUpA6AFQgRSBEAgBSgCiAUhByAFKAKUBSELIAUoApwFIQogBSgCmAUhCCAFQegGaiIMIAUoAowFIg4gBSgCkAUQmwQgBiAIIAoQmwQgBUGwBmogCUEQaikDADcDACAFQagGaiAJQQhqKQMANwMAIAUgCSkDADcDoAYgBUHQBmogBUHwBWogDCAFQaAGahCmASALIAgQhgggByAOEIYIDAELCyAFQdgDahC2BSAFQdACaiAFQfgFaikDADcDACAFQdgCaiAFQYAGaikDADcDACAFQeACaiAFQYgGaikDADcDACAFIAUpA/AFNwPIAkEAIQsLIAFB+ABqIQggBUHwBWogBUHIAmoQtwEDQAJAIAVBoAZqIAVB8AVqEPsGIAUpA7gGIhlCBFENACAFQYgFaiIJIAVBoAZqQTAQkgkaIAgoAgApAwAgBSkDqAUhGiAJEIUHIBpRDQELCyAFQfAFahC2BQJAAkAgGUIEUQRAEDUhCSAFQaAGaiAFQcgCahCeBSAFQaAFaiAFQbgGaikDADcDACAFQZgFaiAFQbAGaikDADcDACAFQZAFaiAFQagGaikDADcDACAFIAUpA6AGNwOIBQNAAkAgBUEYaiAFQYgFahCAByAFKAIYIgZFDQAgBSgCHCEHIAZBFGooAgAhCiAGQRBqKAIAIQwgBSAGKAIEIg4gBigCCCINEAciBjYCqAQgBUEQaiAJIAYQvAUgBSgCFCEGIAUoAhANBiAFIAY2AugEIAVBqARqENUHAkAgBhASQQFGBEAQNSEGIAUgDCAKEAciCjYC+AQgBSAHKQMAIAdBEGooAgAgCCgCABCKBiIHNgKoBCAFQfAFaiIMIAYgCiAHEPAEIAUtAPAFIAUoAvQFQeTywQAQ6wUgBUGoBGoiBxDVByAFQfgEaiIKENUHIAUgDiANEAciDjYC+AQgBSAGNgKoBCAMIAkgDiAGEPAEIAUtAPAFIAUoAvQFQfTywQAQ6wUgBxDVByAKENUHDAELIAUgDCAKEAciCjYC+AQgBSAHKQMAIAdBEGooAgAgCCgCABCKBiIHNgKoBCAFQfAFaiAGIAogBxDwBCAFLQDwBSAFKAL0BUHU8sEAEOsFIAVBqARqENUHIAVB+ARqENUHCyAFQegEahDVBwwBCwsgBSgCmAIgCRBCIQYgBUEIahDgBiAFKAIMIAYgBSgCCCIHGyEGIAdFDQIgBhDQASEHIAkQiwgMAQtBwABBBBDHByIBQQk6ABQgAUHcx8EAEPcEIQcLQQchBgwFCyAJEIsIIAVBiAVqIAggBUGAAmogBhBRIAUpA4gFIhlQDQMgBUH4BWoiAiAFQZwFaikCADcDACAFIAUpApQFNwPwBSAFLQCkBSEJIAUoApAFIQggBUGgBmoiBiAFQaUFakErEJIJGiAFQZsEaiAFQegFaikDADcAACAFQZMEaiAFQeAFaikDADcAACAFQYsEaiAFQdgFaikDADcAACAFQfAGaiIHIAIpAwA3AwAgBSAFKQPQBTcAgwQgBSAFKQPwBTcD6AYgBUHYA2oiAiAGQSsQkgkaIAVB2AZqIgYgBykDADcDACAFIAUpA+gGNwPQBiAFQYgDaiIHIAJBywAQkgkaIAVBiAVqIgIgBUGAAmpBKBCSCRogAUGIAWoQ7AcgAUEBNgKIASABQYwBaiACQSgQkgkaIAVBrAFqIAYpAwA3AgAgBSAINgKgASAFIBk3A5gBIAUgCToAtAEgBSAFKQPQBjcCpAEgBUG1AWogB0HLABCSCRogBUHYAmoQ1gMgA0EBRw0AIAVBuAJqENYDCyABIAEoAngQsQMhAgJAAkAgBUGoAWpBktDBABD4ASIJRQRAIAVBiAVqQQRyQZLQwQBBBhCbBAwBCyAJKQMAQgNRDQEgBUGQBWpBADYCAAsgBUHgA2ogBUGUBWooAgA2AgAgBSAFKQKMBTcD2ANBsPvBAEErIAVB2ANqQfTJwQBBmNDBABDpAwALIAIpAwBCAFINASAJKQMIIRkgAiAJQRBqKAIANgIIIAIgGTcDACAFQZgBaiICIAEoAngQ6AMoAgAQACEGIAVBiAVqIgkgAkHoABCSCRogAUEQaiIBELQEIAEgCUHoABCSCRpBACEHIAQhAiAXIANBAUdyDQsMCgsgBSAGNgLwBUGw+8EAQSsgBUHwBWpBpPDBAEHE8sEAEOkDAAtB6K3BAEEpQZSuwQAQ6wYACyAFQfgFaiIBIAVBnAVqKQIANwMAIAUgBUGUBWopAgA3A/AFIAVBpAVqLQAAIQYgBSgCkAUhByAFQaAGaiIJIAVBpQVqQSsQkgkaIAVB8AZqIAEpAwA3AwAgBSAFKQPwBTcD6AYgBUHYA2ogCUErEJIJGgsgBUGUBWogBUHwBmopAwA3AgAgBSAHNgKIBSAFIAUpA+gGNwKMBSAFIAY6AJwFIAVBnQVqIAVB2ANqQSsQkgkaIAVBrAZqQQI2AgAgBUG0BmpBATYCACAFQdTRwQA2AqgGIAVBADYCoAYgBUHHADYCrAQgBSAFQagEajYCsAYgBSAFQYgFaiIBNgKoBCAFQfAFaiAFQaAGahDMAyAFKAL0BSIJIAUoAvgFEDghBiAFKALwBSAJEIYIIAEQ8AIgBUHYAmoQ1gMgA0EBRw0DDAELQQAhCwsgBUG4AmoQ1gMMAQtBASELCyAFQYACahD6BSALRSEIQQELIQdBAAshASAIIANBAUdyRQRAIAQQiwgLIAFFDQELIAIQiwgLIAAgBjYCBCAAIAc2AgAgBUGAB2okAAuaIwIQfwJ+IwBB4AJrIgYkACAAKQMAIRYgAUHU58EAEM8HIQEgBiAFNgKkASAGIAI2ApgBIAYgADYCkAEgBiABNgKIASAGIBY3A4ABIAYgAzYCnAEgBiAENgKgASAGIAI2AqwBIAZB+AFqIgEgBkGAAWoQowMiCSAGKAKQARCPBCAGIAYoAoACNgK4ASAGIAYpA/gBNwOwASAGQZACaiIAKAIAIQ0gBigCiAIhDiAGKAKMAiEKIAAgBkG4AWoiEjYCACAGQYgCaiAErTcDACAGIAOtNwOAAiAGQQA6APgBIAZB2AFqIAEQ7wQCQAJAAkAgBi0A2AEEQCAGLQDZASEEDAELIAZB0AFqIAZB8AFqKQMANwMAIAZByAFqIAZB6AFqKQMANwMAIAYgBikD4AE3A8ABIAZB+AFqIA5B8ABqIhMgAhCVAyAGLQD4AQRAIAYtAPkBIQQMAQtBHCEEQQIhAwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAIOAw4BAgALIAZBkAJqKQMAQsAAg1AEQEECIQRBACECDA4LIAZBoAJqNQIAIRYgBkHYAGogCkE4aigCACAKQTxqKAIAIAYpA4ACIAZBiAJqKAIAQcCLwAAQpQcQqAQgBigCWCILQQhqIQBBACECQR8hBCAGLQBcIRACQAJAAkBBASALQaABaigCACIBQQprIAFBCU0bQQFrDgcGBwsLAQgCAAsgACgCACIADQRBHCEEDAoLIAZB5AFqQQE2AgAgBkHsAWpBATYCACAGQYQCakEBNgIAIAZBjAJqQQA2AgAgBkHM48EANgLgASAGQQA2AtgBIAZBCTYCxAIgBkGMjMAANgKAAiAGQaiVwgA2AogCIAZBADYC+AEgBiAGQcACajYC6AEgBiAGQfgBajYCwAIgBkHYAWpBlIzAABCBBgALIAZCADcDsAIgBkGIAmogBkHQAWopAwA3AwAgBkGAAmogBkHIAWopAwA3AwAgBiAGKQPAATcD+AEgBkHYAWogBkGwAmpBCCAGQbABaiAGQfgBahCSASAGLQDYAQRAIAYtANkBIQQMCQtBHCEEIAYoAtwBQQhHDQggCygCCCIAIAApAwggBikDsAJ8NwMIIAZB+AFqIgAgCygCDEEIahCYBCAGQdAAaiAAQdCLwAAQ0QQgBi0AVCEUIAYoAlAhDCAGQYACaiEPIAZBiAJqIRUCQANAAkAgDCgCECIARQ0AIAwgAEEBayIANgIQIAwoAgggDCgCDCAAaiIAIAwoAgQiAUEAIAAgAU8ba0EDdGoiASgCACIAQQNGDQAgBiABKAIEIgc2ArwCIAYgADYCuAICQAJAAkACQAJAAkACQAJAIABBAWsOAgEDAAsgBkGAlOvcAzYC4AFBACEBIBVBADYCACAPQgA3AwAgBkIANwP4AQNAIAcoAtABIgIgBygCQCIAcQ0GAkAgBygCwAEgAkEBayAAcSIDQQJ0aiICKAIAIgQgAEcEQCAHKALMASAEaiAAQQFqRw0CIAcoAswBIAcoAgBqIABHDQIgAUEKSw0BIAEgAUEHSWohAQwCCyAHAn8gBygCyAEgA0EBak0EQCAHKALMASAAQQAgBygCzAFrcWoMAQsgAEEBagsgBygCQCIDIAAgA0YiAxs2AkAgA0UNASAGIAI2AvgBIAYgAEEBaiIANgL8ASACIAA2AgAgB0GgAWoQpQFBAiEDDAgLIAYoAuABQYCU69wDRw0CIAYgBzYCxAIgBiAGQdgBajYCyAIgBiAGQfgBajYCwAICQBCDBCIABEAgACgCACEBIABBADYCACABRQRAIAYQ1wU2AtACIAZBwAJqIAZB0AJqIgAQmAIgABD4BgwCCyABQgA3AgggBiABNgLcAiAGQcACaiAGQdwCahCYAiAAKAIAIQIgACABNgIAIAYgAjYC0AIgBkHQAmoQkwgMAQsgBhDXBTYC0AIgBkHAAmogBkHQAmoiABCYAiAAEPgGC0EAIQEMAAsACyAHQcQAaigCACEEIAcoAkAhA0EAIQBBACEBA0AgA0EBcQRAQQAhCAwECwJAAkAgA0EBdkEfcSIIQR9GDQAgCEEeRyABckUEQEGAARDXByIBQQBBgAEQkQkaQQAQxQgLIARFBEBBgAEQ1wciBEEAQYABEJEJIQIgByAHKAJEIhEgAiARGzYCRCARBEAgARDFCCACIQEMAgsgByACNgIECyAHIANBAmogBygCQCICIAIgA0YiAhs2AkAgAkUNACAIQR5GDQEgBCEADAULIAcoAkQhBCAHKAJAIQMMAQsLIAEEQCAHIAE2AkQgByAHKAJAQQJqNgJAIAQgATYCAEEeIQggBCEADAQLQff4wQBBK0GQ6cEAEJEFAAsQygUACyAGQYCU69wDNgLIAiAGQegBakEANgIAIAZB4AFqQgA3AwAgBkIANwPYASAGQfgBaiAHEPoEIAYoAvgBRQRAIAYtAIACIQEgBkHQAmogBigC/AEiAEEcahC/AwJAAkAgBigC2AIEQCAPIAZB2AJqKAIANgIAIAYgBikD0AI3A/gBIAYgBigC/AEiAjYC6AEgACABENwGIAJFDQEgAkGBAjsAACAPEPgGQQIhAwwHCyAGQdACahDgByAAQTRqLQAADQEgBiAHNgKIAiAGIAE6APwBIAYgADYC+AEgBiAGQcACajYChAIgBiAGQdgBajYCgAICQBCDBCIABEAgACgCACEBIABBADYCACABRQRAIAYQ1wU2AtACIAZB+AFqIAZB0AJqIgAQnAEhAyAAEPgGDAILIAFCADcCCCAGIAE2AtwCIAZB+AFqIAZB3AJqEJwBIQMgACgCACECIAAgATYCACAGIAI2AtACIAZB0AJqEJMIDAELIAYQ1wU2AtACIAZB+AFqIAZB0AJqIgAQnAEhAyAAEPgGCyAGLQD8ASIAQQJGDQYgBigC+AEgABDcBgwGC0H3+MEAQStBlOrBABCRBQALIAAgARDcBgwDCyAGIAYtAIACOgDUAiAGIAYoAvwBNgLQAkGw+8EAQSsgBkHQAmpBoOnBAEGE6sEAEOkDAAsgARDFCCAARQ0BC0ECIQMgACAIQQJ0akEEaiIAIAAoAgBBAXI2AgAgB0GAAWoQnAMMAQtBASEDCyADQQFxRSADQf8BcSIAQQJHcQ0CIAZBuAJqEIgCIABBAkcNAQsLIAwgFBDcBkEIIQgMCgtBhPrBAEEoQcjfwQAQkQUACyAGQfgBaiIAIApBOGooAgAgCkE8aigCACAOQaABahC1CCAGQdgBaiAAENkFIAYtANwBIgFBAkcEQAJAIAYoAtgBIgcQ9wYiACgCACICRQRAQQAhAkEIIQQMAQsgBkGIAmogBkHQAWopAwA3AwAgBkGAAmogBkHIAWopAwA3AwAgBiAGKQPAATcD+AEgBkHYAWogAiAAQQRqKAIAIAZBsAFqIAZB+AFqEJ4BIAYtANgBBEBBACECIAYtANkBIgRBG0cNASAGQegAaiAJEPQEIAYoAmgiAEECRg0BIAYoAmwiBEGAfnEhAiAAIQMMAQsgBigC3AEhCCAHIAEQhwgMCwsgByABEIcIDA0LQQAhAiAGLQDYASIEQRtHDQwgBkHgAGogCRD0BCAGKAJgIgBBAkYNDCAGKAJkIgRBgH5xIQIgACEDDAwLIAZB+AFqIgAgCkE4aigCACAKQTxqKAIAIA5BoAFqELYIIAZB2AFqIAAQ2QUgBi0A3AEiAUECRwRAAkAgBigC2AEiBxD3BiIAKAIAIgJFBEBBACECQQghBAwBCyAGQYgCaiAGQdABaikDADcDACAGQYACaiAGQcgBaikDADcDACAGIAYpA8ABNwP4ASAGQdgBaiACIABBBGooAgAgBkGwAWogBkH4AWoQngEgBi0A2AEEQEEAIQIgBi0A2QEiBEEbRw0BIAZB+ABqIAkQ9AQgBigCeCIAQQJGDQEgBigCfCIEQYB+cSECIAAhAwwBCyAGKALcASEIIAcgARCHCAwKCyAHIAEQhwgMDAtBACECIAYtANgBIgRBG0cNCyAGQfAAaiAJEPQEIAYoAnAiAEECRg0LIAYoAnQiBEGAfnEhAiAAIQMMCwsgC0EMaiIBKAIAIQIgBiAWNwOAAiAGQgA3A/gBIAZB2AFqIgMgACAGQfgBaiACKAJUEQMAIAZBwAJqIAMQrAYgBi0AwAIEQEEAIQJBAiEDIAYtAMECIgRBG0cNBiAGQShqIAkQ9AQgBigCKCIAQQJGDQYgBigCLCIEQYB+cSECIAAhAwwGCyAGQYgCaiAGQdABaikDADcDACAGQYACaiAGQcgBaikDADcDACAGIAYpA8ABNwP4ASAGQdgBaiALKAIIIAEoAgAgBkGwAWogBkH4AWoQngEgBi0A2AFFDQNBACECQQIhAyAGLQDZASIEQRtHDQUgBkEgaiAJEPQEIAYoAiAiAEECRg0FIAYoAiQiBEGAfnEhAiAAIQMMBQsgBkGIAmogBkHQAWopAwA3AwAgBkGAAmogBkHIAWopAwA3AwAgBiAGKQPAATcD+AEgBkHYAWogACAGQbABaiAGQfgBahBvIAYtANgBRQ0CIAYtANkBIgRBG0cNBCAGQTBqIAkQ9AQgBigCMCIAQQJGDQQgBigCNCIEQYB+cSECIAAhAwwECyAGQYgCaiAGQdABaikDADcDACAGQYACaiAGQcgBaikDADcDACAGIAYpA8ABNwP4ASAGQdgBaiAAIAZBsAFqIAZB+AFqEL4BIAYtANgBRQ0BIAYtANkBIgRBG0cNAyAGQThqIAkQ9AQgBigCOCIAQQJGDQMgBigCPCIEQYB+cSECIAAhAwwDCyAGQcgAaiALQQxqKAIAIAtBEGooAgAgFqdB4IvAABDHBiAGKAJMIQAgBigCSCEBIAZBiAJqIAZB0AFqKQMANwMAIAZBgAJqIAZByAFqKQMANwMAIAYgBikDwAE3A/gBIAZB2AFqIAEgACAGQbABaiAGQfgBahCSASAGLQDYAQ0BCyAGKALcASEIDAILIAYtANkBIgRBG0cNACAGQUBrIAkQ9AQgBigCQCIAQQJGDQAgBigCRCIEQYB+cSECIAAhAwsgCyAQEIcIDAQLIAsgEBCHCCAGQfgBaiIAIA5BoAFqEMgIIAZBGGogAEGkjMAAENAEQQghBCAGLQAcIQAgBigCGCIBQQhqIAZBrAFqEM4FIgJFBEAgASAAEIcIDAILIAIgAikDICAIrXw3AyAgASAAEIcIIAZB+AFqIBMgBigCrAEQ7wMCQCAGLQD4AUUEQCAGQQhqIApBOGooAgAgCkE8aigCACAGKQOAAiIWIAZBiAJqKAIAIgJBpJTBABClBxCoBEEcIQQgBi0ADCEBAkACQAJAQQEgBigCCCIAQaABaigCACIDQQprIANBCU0bDgUAAgIBAQILIAAoAggiA0UEQEEIIQQMAgsgAyAAQQxqKAIAKAKEAREHACEXIAAgAUEARxCVCSAKQThqKAIAIApBPGooAgAgFiACQbSUwQAQpQdBsAFqIgAQuQcgBkH4AWogABCEBSAGKAL4AUUNAyAGIAYoAvwBNgLYASAGIAZBgAJqLQAAOgDcAUGw+8EAQSsgBkHYAWpB+IzBAEHElMEAEOkDAAtBHyEECyAAIAEQhwgMAwtBACECQQIhAyAGLQD5ASIEQRtHDQQgBkEQaiAJEPQEIAYoAhAiAEECRg0EIAYoAhQiBEGAfnEhAiAAIQMMBAsgBkGAAmotAAAhACAGKAL8ASIBQShqIBc3AwAgASAAEIcIC0ECIQNBACECIAWtIBIgCBC4BkH/AXEQiAdB/wFxIgRBzQBHDQIgDSANKAIAQQFrNgIAIAYoArgBEIsIDAMLQQAhAkECIQMMAQtBAiEDQQAhAgsgDSANKAIAQQFrNgIAIAYoArgBEIsIIAIgBEH/AXFyIQIgA0ECRg0AQQgQUCIABEAgACACNgIEIAAgAzYCACAAEKgIAAsACyAGQeACaiQAIAJB/wFxC+0mAhV/CX4jAEHgAmsiBiQAIAZB4AFqIAEQowMiDCABQRBqKAIAEI8EIAYgBigC6AE2AqgBIAYgBikD4AE3A6ABIAZB+AFqKAIAIRYgBigC9AEhASAGKALwASEHIAZBADYCuAEgBkKAgICAwAA3A7ABIAZBADYCyAEgBkKAgICAgAE3A8ABIAZBADYC2AEgBkKAgICAIDcD0AEgB0GgAWohDSAHQfAAaiEPIAZB0AJqIRQgBkHBAmohECAGQcgBaiEXIAZBuAFqIRggBa0hIyADrSEhIAZBqAFqIRFBwJaxAiETIAFBPGohCiABQThqIQlBBCEIQQIhDkEAIQUgAq0iIiEdIAStIh8hGwJAAkADQCAbUARAQQAhCSAGQQA2AugBIAZCgICAgMAANwPgASAGKAK4AUEDdCEBQQQhBANAAkACQAJAIAFFBEAgBigC5AEhDSAGKALgASEPQQIhCgJAAkACQAJAAkACQAJAAkACQAJAIAYoAtgBIgQEQCAEQf////8DSw0CIARBAXQiAUEASA0CIAZB4ABqIAEgBEGAgICABElBAXRBARCuBiAGKAJgIgpFDQELIAZB4AFqIgEQlwEgAUGoi8EAEL4FIR1BACEIA0AgCEUEQCAGQeABaiIBEJcBAn8gHSABQbiLwQAQvgUiG1YEQEIAIRtBAAwBCyAbIB19IhxCgJTr3AOAIRsgHEKAlOvcA4KnQYCU69wDcAshC0EOIQcCQAJAAkAgCSAGKALYASIBRyABIARHcg0AIAYoAtQBIRRBACEBQQAhCANAAkAgASAJRgRAIAhFDQEMBQsgBkHgAWogDSABQQN0aiIDKAIAIgUgAygCBCIHKAKYAREAAAJAIAYoAuABIhBBAkcEQCAGQeABaiAFIAcoApwBEQAAIAYoAuABIg5BAkcNAQsgBi0A5AEiB0EVRg0BDAMLIAFBAWohAyAGKALkASECIAUgBygCoAERBgAhBSAGIBQgAUEBdCIHai8BADsB5AFBACEBIAZBADYC4AEgEEEARyEQIA5FIAJFciEOA0AgBkHgAWoQrwNB/wFxIhIEQAJAAkACQAJAAkAgEkEBaw4IAAEUAhQUFAMECyABIBByIQEMBQsgASABQQJyIA4bIQEMBAsgASABQQRyIAUbIQEMAwsgASABQQhyIAUbIQEMAgsgASABQRByIAUbIQEMAQsLIAcgCmogATsBACAIIAFB//8DcUEAR2ohCCADIQEMAQsLIAZB4AFqIgEQlwEgAUHIrcEAEL8FIRwgBkHYAGogDBD0BCAGKAJYIgFBAkYEQCAGQeABaiIBEJcBQQAhCCABQditwQAQvwUiHiAcVCIBDQMgHiAcfUK/hD1WIB5CP4cgHEI/h30gAa19IhxCAFIgHFAbDQMjAEEgayIAJAAgAEEUakEBNgIAIABBHGpBADYCACAAQcTNwAA2AhAgAEGolcIANgIYIABBADYCCCAAQQhqQYDOwAAQgQYACyAGKAJcIQIgACABNgIAIAAgAjYCBAwBCyAAQQI2AgAgACAHEO4HOgAECyAEIAoQ2gcMCAtBfyAbICBSIBsgIFQbIgEEfyABBSALIBNJDQIgCyATRwtBAUcNAQsLIAZBADYCqAIgBiAKNgKkAiAGIAo2ApwCIAYgBDYCmAIgBiAKIARBAXRqIhM2AqACQgAhHEEAIQQDQCAcIRsgEyAKIgFGBEAgBkGYAmoQ2QggG6chA0EBIQEgCA0JIAYoAsgBIQIgBigCwAEhBSAGIAYoAsQBIgE2AsQCIAYgATYCvAIgBiAFNgK4AiAGIAEgAkEobCIHajYCwAIgAkH/////AXEgA2ohAwNAAkAgBwRAIAYgAUEoaiICNgK8AiABLQAAQQJHDQEgBCEDCyAGQbgCahDaCEEAIQEMCwsgASkDICEcIAYgETYC8AEgBiAfNwPoASAGICE3A+ABIAZBCGogBkHgAWoiASAbEJQGIAYoAhAhBSAGKQMIIR0gBkICNwPwASAGQQA6AOgBIAYgHDcD4AEgHSAFIAEQhQZB/wFxEIgHQf8BcSIBQc0ARwRAIABBAjYCACAAIAE6AAQgBkG4AmoQ2ghBACEBDAwFIAdBKGshByAEQQFqIQQgG0IBfCEbIAIhAQwBCwALAAsgBiABQQJqIgo2ApwCIAYgG0IBfCIcPgKoAiAGIAEvAQA7AbQCQQAhByAGQQA2ArACQQYhAUEAIQMDQAJAIAEhBSAGQbACahCvA0H/AXEiC0UEQCAGIBE2AvABIAYgHzcD6AEgBiAiNwPgASAGQThqIAZB4AFqIgEgGxCUBiABIAYpAzggBigCQBCDBSAGQbgCaiABEJUGIAYtAMACQQRHDQEgACAGLQC4AjoABCAAQQI2AgAMCAtBHSEBAkACQAJAAkAgC0EBaw4IAwINBQ0NDQABC0EBIQcgBSEBDAQLQRwhAQwDCyAGQeABaiIBIA0gCSAbp0HIi8EAEJEHIgMoAgAgAygCBCgCnAERAAAgBkG4AmogARDjBSAGKAK4AiIDQQJGDQdBACEBIAYoArwCQQAgAxshAwwCCyAGQeABaiIBIA0gCSAbp0HYi8EAEJEHIgMoAgAgAygCBCgCmAERAAAgBkG4AmogARDjBSAGKAK4AiIDQQJGDQVBACEBIAYoArwCQQAgAxshAwwBCwsgBikDuAIhICAGIBE2AvABIAYgHzcD6AEgBiAiNwPgASAGQShqIAZB4AFqIgEgGxCUBiABIAYpAyggBigCMBCDBSAGQbgCaiABEJUGIAYtAMACIgFBBEYEQCAAIAYtALgCOgAEIABBAjYCAAwGC0ICIR0CQAJ+AkACQCABQQFrQQAgAUEBSxtBAWsOAgABAwtCACEdIAOtDAELQgEhHSADrQshHiAHIQILIAYgETYC8AEgBiAfNwPoASAGICE3A+ABIAZBGGogBkHgAWoiASAbEJQGIAYoAiAhAyAGKQMYIRsgBiACOwGAAiAGIB43A/gBIAYgHTcD8AEgBiAFOgDoASAGICA3A+ABIARBAWohBCAbIAMgARCFBkH/AXEQiAdB/wFxIgFBzQBGDQALIABBAjYCACAAIAE6AAQMBAsACxDGBQALAkAgBi0AvAIiAUEbRw0AIAZByABqIAwQ9AQgBigCSCICQQJGDQAgBigCTCEBIAAgAjYCACAAIAE2AgQMAgsgAEECNgIAIAAgAToABAwBCwJAIAYtALwCIgFBG0cNACAGQdAAaiAMEPQEIAYoAlAiAkECRg0AIAYoAlQhASAAIAI2AgAgACABNgIEDAELIABBAjYCACAAIAE6AAQLIAZBmAJqENkIC0EBIQEMAgsACyAGIAM2AuABIBEgIyAGQeABakEEEKADEIgHQf8BcSICQc0ARg0BIABBAjYCACAAIAI6AAQLIA8gDRDbBwwCCyAAQQI2AgAgAEEAOgAEIA8gDRDbByAGKALQASAGKALUARDaByAIBEAgBigCwAEgBigCxAEQ3AcLDAgLIAgoAgAiAygCmAFBCkcNAiADKAIAIgUNASAAQQI2AgAgAEEIOgAEIAYoAuABIAYoAuQBENsHQQEhAQsgBigC0AEgBigC1AEQ2gcgAQ0FDAYLIAMoAgQhAyAGKALgASAJRgRAIAZB4AFqIAkQ/QIgBigC6AEhCSAGKALkASEECyAIQQhqIQggBCAJQQN0aiIHIAM2AgQgByAFNgIAIAYgBigC6AFBAWoiCTYC6AEgAUEIayEBDAELC0GE+sEAQShB2KrBABCRBQALIAZB4AFqIgEgHSAREIMFIAZBuAJqIAEQlQYCQCAGLQDAAiILQQRGBEAgACAGLQC4AjoABCAAQQI2AgAMAQsgBkHeAWoiAiAQQQJqLQAAOgAAIAZBoAJqIhkgFEEIaikDADcDACAGIBAvAAA7AdwBIAYgFCkDADcDmAIgBigCxAIhBAJ/AkACQAJAAkACQCALQQFrQQAgC0EBSxtBAWsOAgECAAsgBikDuAIhHiAGKQPIAiIcQoCU69wDgCEgIBxCgJTr3AOCp0GAlOvcA3AhEyAGKALIASIBIAYoAsABRgRAIAZBwAFqIQcjAEEgayIDJAACf0EAIAFBAWoiAUUNABpBBCAHKAIAIhJBAXQiFSABIAEgFUkbIgEgAUEETRsiFUEobCEBIBVBtObMGUlBA3QhGgJAIBIEQCADQQg2AhggAyASQShsNgIUIAMgBygCBDYCEAwBCyADQQA2AhgLIAMgASAaIANBEGoQ4AIgAygCBCEBIAMoAgAEQCADQQhqKAIADAELIAcgFTYCACAHIAE2AgRBgYCAgHgLIQcgASAHEKkHIANBIGokACAGKALIASEBCyAGKALEASABQShsaiIDIAs6AAAgAyAGLwHcATsAASADIBw3AwggAyAENgIEIAMgBikDmAI3AxAgAyAeNwMgIANBA2ogAi0AADoAACADQRhqIBkpAwA3AwAgFwwEC0EBIQEgBEEDTw0BDAILQQIhASAEQQNJDQEgBkHgAWogDyAEEJUDIAYtAOABBEACQCAGLQDhASIBQRtHDQAgBkGYAWogDBD0BCAGKAKYASICQQJGDQAgBigCnAEhASAAIAI2AgAgACABNgIEDAULIABBAjYCACAAIAE6AAQMBAsgBikD+AFCwACDQgBSDQEgAEECNgIAIABBAjoABAwDCyAGQeABaiAPIAQQlQMgBi0A4AEEQAJAIAYtAOEBIgFBG0cNACAGQZABaiAMEPQEIAYoApABIgJBAkYNACAGKAKUASEBIAAgAjYCACAAIAE2AgQMBAsgAEECNgIAIAAgAToABAwDCyAGKQP4AUICg0IAUg0AIABBAjYCACAAQQI6AAQMAgsgBigC0AEgBUYEQCAGQdABaiEHIwBBIGsiAyQAAn9BACAFQQFqIgVFDQAaQQQgBygCACIOQQF0IgggBSAFIAhJGyIFIAVBBE0bIgtBAXQhBSALQYCAgIAESUEBdCESAkAgDgRAIANBAjYCGCADIAg2AhQgAyAHKAIENgIQDAELIANBADYCGAsgAyAFIBIgA0EQahDgAiADKAIEIQUgAygCAARAIANBCGooAgAMAQsgByALNgIAIAcgBTYCBEGBgICAeAshByAFIAcQqQcgA0EgaiQAIAYoAtQBIQ4gBigC2AEhBQsgDiAFQQF0aiABOwEAIAYgBUEBaiIFNgLYAQJAAkACQAJAAkACQAJAIAQOAwIBAwALIAZB4AFqIA8gBBCVAyAGLQDgAQRAAkAgBi0A4QEiAUEbRw0AIAZB8ABqIAwQ9AQgBigCcCICQQJGDQAgBigCdCEBIAAgAjYCACAAIAE2AgQMCQsgAEECNgIAIAAgAToABAwICwJAAkAgBikD+AFCgICAwACDQgBSBEAgBkHoAGogCSgCACAKKAIAIAYpA+gBIAYoAvABQdSKwQAQpQcQ6wQgBigCbCEDQQEgBigCaCIHKAKYASIBQQprIAFBCU0bIgFFDQFBASABdEGGAXENAiAGQcQCakEBNgIAIAZBzAJqQQE2AgAgBkHsAWpBATYCACAGQfQBakEANgIAIAZBzOPBADYCwAIgBkEANgK4AiAGQQk2ArQCIAZBkIvBADYC6AEgBkGolcIANgLwASAGQQA2AuABIAYgBkGwAmo2AsgCIAYgBkHgAWo2ArACIAZBuAJqQZiLwQAQgQYACyAAQQI2AgAgAEECOgAEDAkLIAcoAgANBgsgAEECNgIAIABBCDoABCADIAMoAgBBAWs2AgAMBwsgBkHgAWoiASAJKAIAIAooAgAgDUEBEIsDIAZBuAJqIAEQ8QUgBigCuAIiB0UNAwwCCyAGQeABaiIBIAkoAgAgCigCACANQQAQiwMgBkG4AmogARDxBSAGKAK4AiIHDQECQCAGLQC8AiIBQRtHDQAgBkGAAWogDBD0BCAGKAKAASICQQJGDQAgBigChAEhASAAIAI2AgAgACABNgIEDAYLIABBAjYCACAAIAE6AAQMBQsgBkHgAWoiASAJKAIAIAooAgAgDUECEIsDIAZBuAJqIAEQ8QUgBigCuAIiBw0AAkAgBi0AvAIiAUEbRw0AIAZB+ABqIAwQ9AQgBigCeCICQQJGDQAgBigCfCEBIAAgAjYCACAAIAE2AgQMBQsgAEECNgIAIAAgAToABAwECyAGKAK8AiEDDAELAkAgBi0AvAIiAUEbRw0AIAZBiAFqIAwQ9AQgBigCiAEiAkECRg0AIAYoAowBIQEgACACNgIAIAAgATYCBAwDCyAAQQI2AgAgACABOgAEDAILIAYoArgBIgEgBigCsAFGBEAgBkGwAWogARD9AiAGKAK4ASEBCyAGKAK0ASIIIAFBA3RqIgQgAzYCBCAEIAc2AgAgGAsgAUEBajYCACAbQgF9IRsgHUIofCEdDAELCyAGKALQASAGKALUARDaBwsgBigCwAEgBigCxAEQ3AcLIAZBsAFqIgAoAghBA3QhASAAKAIEIQIDQCABBEAgAigCBCIDIAMoAgBBAWs2AgAgAUEIayEBIAJBCGohAgwBCwsgACgCACIBBEAgACgCBCABQQN0EKQICyAWIBYoAgBBAWs2AgAgBigCqAEQiwggBkHgAmokAAu4HgIVfwJ+IwBB8AFrIgQkACABQTRqIRYgAUEgaiEPIARB0ABqQQFyIQogBEGoAWohEiAEQdgAaiEMIARB4AFqIQ0gBEHYAWpBAXIhEyAEQSxqIRcgBEEoaiEUIARBIGpBAXIhFSAEQRBqQQFyIQ4gAUFAayEYIARB6AFqIREDQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAEoAiwEQCABKAIkIgUNAQsgASgCmAEiBUEBayIHQQAgBSAHTxsOCQIDCAEHAQYFBAELIA8oAgAhByAEQegBaiADQRBqKQMANwMAIARB4AFqIANBCGopAwA3AwAgBCADKQMANwPYASAEQdAAaiAHIAUgAiAEQdgBahCJASAELQBQDQwCQCABKAKYASICQQFrIgNBACACIANPG0EGRgRAIAQgBTYCwAEgASgCJCICIAVJDQ0gASACIAVrNgIkIAEgASgCICAFajYCIAwBCyABKAIkRQ0AIAEoAiwiAkGwxsEARiACQbzGwQBGckUEQCABQQA2AiQMAQsgBEHgAWogD0EIaikCADcDACABQdiTwAA2AiwgAUEoakEANgIAIA8pAgAhGSABQQA2AiQgAUGolcIANgIgIAQgGTcD2AEgBEHYAWoQwAcLIABBADoAACAAIAU2AgQMFAsgAEGB9AA7AQAMEwsgAEGB6gA7AQAMEgsgAS0AMUEARyAWQYDGwQAQ+QUaIAEtAFBBAWsOAgoGBQsgAEGBOjsBAAwQCyAEQdgBaiIGIAEoAjAgASgCNCgCOBEAACAEQdAAaiAGEP0EIAQtAFAhBSAELQBgQQJGDQUgDiAKKQAANwAAIA5BB2ogCkEHaikAADcAACAEIAU6ABAMDgsgBEHYAWoiBiABKAIwIAEoAjQoAjgRAAAgBEHQAGogBhD9BCAELQBQIQUgBC0AYEECRwRAIA4gCikAADcAACAOQQdqIApBB2opAAA3AAAgBCAFOgAQDA4LIABBAToAACAAIAU6AAEMDgsgBEHYAWoiBiABKAIwIAEoAjQoAjARAAAgBEHQAGogBhD9BCAELQBQIQUgBC0AYEECRwRAIA4gCikAADcAACAOQQdqIApBB2opAAA3AAAgBCAFOgAQDA0LIABBAToAACAAIAU6AAEMDQsgBEHYAWoiBiABKAIwIAEoAjQoAiARAAAgBEHQAGogBhD9BCAELQBQIQUgBC0AYEECRwRAIA4gCikAADcAACAOQQdqIApBB2opAAA3AAAgBCAFOgAQDAwLIABBAToAACAAIAU6AAEMDAsgAEGBOjsBAAwLCyABKAJEIgVBA0YNBAJAAkACQCAFQQFrDgIBCAALIAEoAkghBSAEQYCU69wDNgK4ASARQQA2AgAgDUIANwMAIARCADcD2AEDQAJAIAUoAgAiB0EBaiAFKALAASAFKALQAUEBayAHcSIJQRxsaiIIKAIYIgZHBEAgBiAHRw0CIAcgBSgCQCIHIAUoAtABIgZBf3NxRw0CIAYgB3FFDQEgBEIANwPYAQwMCyAFIAUoAsgBIAlBAWpNBH8gBSgCzAEgB0EAIAUoAswBa3FqBSAGCyAFKAIAIgYgBiAHRiIGGzYCACAGRQ0BIAQgCDYC2AEgBCAFKALMASAHaiIHNgLcASAIIAc2AhggBEHIAWoiByAIQRBqKQIANwMAIAQgCCkCCDcDwAEgCCgCBCEGIAgoAgAhCCAFQYABahDpASAEQYABaiIFIAcpAwA3AwAgBCAEKQPAATcDeCAGRQ0LIAwgBCkDeDcCACAMQQhqIAUpAwA3AgAgBCAGNgJUIAQgCDYCUAwMCyAEKAK4AUGAlOvcA0cNAiAEIAU2AsQBIAQgBEGwAWo2AsgBIAQgBEHYAWo2AsABEIMEIgcEQCAHKAIAIQYgB0EANgIAIAZFBEAgBBDXBTYCeCAEQcABaiAEQfgAaiIGEJsCIAYQ+AYMAgsgBkIANwIIIAQgBjYCaCAEQcABaiAEQegAahCbAiAHKAIAIQggByAGNgIAIAQgCDYCeCAEQfgAahCTCAUgBBDXBTYCeCAEQcABaiAEQfgAaiIGEJsCIAYQ+AYLDAALAAsgASgCSCEFIARBgJTr3AM2ArgBIBFBADYCACANQgA3AwAgBEIANwPYAQNAIAUoAgAiB0EBdiIQQR9xIglBH0YNACAFKAIEIQggB0ECaiEGAkAgB0EBcUUEQCAQIAUoAkAiC0EBdkYNASAGIAcgC3NBP0tyIQYLIAhFDQEgBSAGIAUoAgAiCyAHIAtGGzYCACAHIAtHDQEgCUEeRgRAIAgQmAgiBygCACELIAUgBzYCBCAFIAZBAmpBfnEgC0EAR3I2AgALIAQgCTYC5AEgBCAINgLgASAIRQ0KIAhBBGogBCgC5AEiB0EcbGoiCRCXCCAEQcgBaiILIAlBEGopAgA3AwAgBCAJKQIINwPAASAJKAIEIQYgCSgCACEQQQAhBSAHQQFqIgdBH0cEQCAJIAkoAhgiCUECcjYCGCAHIQUgCUEEcUUNCgtBHiAFayIHQQAgB0EeTRshByAIIAVBHGxqQRxqIQUDQCAHRQRAIAgQfgwLCyAFLQAAQQJxRQRAIAUgBSgCACIJQQRyNgIAIAlBAnFFDQsLIAdBAWshByAFQRxqIQUMAAsACyALQQFxBEAgBEEANgLgAQwKCyAEKAK4AUGAlOvcA0cNASAEIAU2AsQBIAQgBEGwAWo2AsgBIAQgBEHYAWo2AsABEIMEIgcEQCAHKAIAIQYgB0EANgIAIAZFBEAgBBDXBTYCeCAEQcABaiAEQfgAaiIGEMECIAYQ+AYMAgsgBkIANwIIIAQgBjYCaCAEQcABaiAEQegAahDBAiAHKAIAIQggByAGNgIAIAQgCDYCeCAEQfgAahCTCAUgBBDXBTYCeCAEQcABaiAEQfgAaiIGEMECIAYQ+AYLDAALAAsQygUACyAAQQE6AAAgACAFOgABDAkLIARB3ABqQTU2AgAgBEHkAWpBAjYCACAEQewBakECNgIAIARB2ODBADYC4AEgBEEANgLYASAEQTU2AlQgBCACNgIgIAQgBEHQAGo2AugBIAQgBEEgajYCWCAEIARBwAFqNgJQIARB2AFqQcThwQAQgQYACyAELQBRIQEgAEEBOgAAIAAgAToAAQwHCyABKAI8IgVBA0cEQCAEQdgBaiAFIBgoAgAQWyAEKALcASIFBEAgCiATLwAAOwAAIApBAmogE0ECai0AADoAACAEIAQoAuABNgJYIAQgBTYCVCAEIAQtANgBOgBQIARBEGogBEHQAGoQqwMMBwsgAEGBOjsBAAwHCyAAQYE6OwEADAYLIABBgTo7AQAMBQsgASgCSCEGIARBgJTr3AM2AnAgBEGIAWpBADYCACAEQYABakIANwMAIARCADcDeCAEQdgBaiAGEPoEAkAgBCgC2AFFBEAgBC0A4AEhByAEQZABaiAEKALcASIFQQRqEL8DAkACQAJAIAQoApgBBEAgEiAEQZgBaigCADYCACAEIAQpA5ABNwOgASAEIAQoAqQBNgKIASAFIAcQ+QcgBCgCiAEiBUUNAQJAAkAgBS0AGUUEQCAFEOUIIARBADYC3AEgBSAEQdgBahDRBSAEKALcASIGDQFB9/jBAEErQfyvwQAQkQUACyAEQQA2AtwBIAUgBEHYAWoQ0QUgBCgC3AEiBkUNByAEQcgBaiANQQhqKQIAIhk3AwAgBEG4AWogGTcDACAEIA0pAgAiGTcDwAEgBCgC2AEhByAFQQE6ABggBCAZNwOwAQwBCyAEQbgBaiANQQhqKQIANwMAIAQgDSkCADcDsAEgBCgC2AEhByAFEMAGIAUQfgsgDCAEKQOwATcCACAMQQhqIARBuAFqKQMANwIAIAQgBjYCVCAEIAc2AlAMAgsgBEGQAWoQ4AcgBUE0ai0AAA0CIAQgBjYC0AEgBCAHOgDEASAEIAU2AsABIAQgBEHoAGo2AswBIAQgBEH4AGo2AsgBAkAQgwQiBQRAIAUoAgAhByAFQQA2AgACQCAHRQRAIAQQ1wU2ArABIARB2AFqIARBwAFqIARBsAFqIgYQkAEgBhD4BgwBCyAHQgA3AgggBCAHNgKgASAEQdgBaiAEQcABaiAEQaABahCQASAFKAIAIQYgBSAHNgIAIAQgBjYCsAEgBEGwAWoQkwgLIARB4ABqIBEpAwA3AwAgDCANKQMANwMAIAQgBCkD2AE3A1AMAQsgBBDXBTYC2AEgBEHQAGogBEHAAWogBEHYAWoiBhCQASAGEPgGCyAELQDEASIFQQJHBEAgBCgCwAEgBRD5BwsgBCgCVCEGDAcLQQAhBiAEQQA2AlQgBEEBOgBQCyASEPgGDAULQQAhBiAEQQA2AlQgBEEBOgBQIAUgBxD5BwwECyAEIAQtAOABOgDEASAEIAQoAtwBNgLAAUGw+8EAQSsgBEHAAWpBzK/BAEGMsMEAEOkDAAtB9/jBAEErQeyvwQAQkQUACyAEQYABaiIFIAspAwA3AwAgBCAEKQPAATcDeCAGRQ0AIAwgBCkDeDcCACAMQQhqIAUpAwA3AgAgBCAGNgJUIAQgEDYCUAwBCyAEQQE6AFBBACEGCyAGRQRAIABBgTo7AQAMAgsgBEHOAGogCkECai0AACIFOgAAIARBQGsgDEEIaikCACIZNwMAIAQgCi8AACIHOwFMIAQgDCkCACIaNwM4IAQtAFAhCCAVQQJqIAU6AAAgFSAHOwAAIBQgGjcCACAUQQhqIBk3AgAgBCAGNgIkIAQgCDoAICAEQRg2AlwgBCAXNgJYIARBGDYCVCAEIARBIGoiCzYCUCAEQQI2AuwBIARBAjYC5AEgBEGs28EANgLgASAEQQA2AtgBIAQgBEHQAGo2AugBIARBwAFqIARB2AFqIhAQrQEgBCgCwAEhBiAEKALEASEFIARBCGogBCgCyAEiB0EAEJEEIAQgBCgCDCIINgLcASAEIAQoAgg2AtgBIAggBSAHEJIJGiAEIAc2AuABIARBEGogEBCrAyAGIAUQhgggCxCFBwsgDSAPQQhqIgUpAgA3AwAgDykCACEZIA8gBCkDEDcCACAFIARBGGopAwA3AgAgBCAZNwPYASAEKALkAQRAIARB2AFqEMAHCyABQQI7AQAMAQsLIARB8AFqJAALlx8CCH8BfgJAAkACQAJAAkAgAEH1AU8EQCAAQc3/e08NBCAAQQtqIgBBeHEhBEGMnMIAKAIAIghFDQNBACAEayECAn9BACAEQYACSQ0AGkEfIARB////B0sNABogBEEGIABBCHZnIgBrdkEBcSAAQQF0a0E+agsiBkECdEHwmMIAaigCACIABEAgBEEZIAZBAXZrQR9xQQAgBkEfRxt0IQcDQAJAIAAoAgRBeHEiBSAESQ0AIAUgBGsiBSACTw0AIAAhAyAFIgINAEEAIQIMBAsgAEEUaigCACIFIAEgBSAAIAdBHXZBBHFqQRBqKAIAIgBHGyABIAUbIQEgB0EBdCEHIAANAAsgAQRAIAEhAAwDCyADDQMLQQAhAyAIQQIgBnQiAEEAIABrcnEiAEUNAyAAQQAgAGtxaEECdEHwmMIAaigCACIADQEMAwsCQAJAAkACfwJAAkBBiJzCACgCACIDQRAgAEELakF4cSAAQQtJGyIEQQN2IgF2IgBBA3FFBEAgBEGQnMIAKAIATQ0JIAANAUGMnMIAKAIAIgBFDQkgAEEAIABrcWhBAnRB8JjCAGooAgAiAygCBEF4cSAEayEBIAMoAhAiAEUEQCADQRRqKAIAIQALIAAEQANAIAAoAgRBeHEgBGsiBSABSSECIAUgASACGyEBIAAgAyACGyEDIAAoAhAiAgR/IAIFIABBFGooAgALIgANAAsLIAMQ+wEgAUEQSQ0FIAMgBEEDcjYCBCADIARqIgUgAUEBcjYCBCABIAVqIAE2AgBBkJzCACgCACIERQ0EIARBeHFBgJrCAGohAEGYnMIAKAIAIQJBiJzCACgCACIGQQEgBEEDdnQiBHFFDQIgACgCCAwDCwJAIABBf3NBAXEgAWoiAEEDdCIFQYiawgBqKAIAIgFBCGoiBCgCACICIAVBgJrCAGoiBUcEQCACIAU2AgwgBSACNgIIDAELQYicwgAgA0F+IAB3cTYCAAsgASAAQQN0IgBBA3I2AgQgACABaiIAIAAoAgRBAXI2AgQgBA8LAkBBAiABQR9xIgF0IgJBACACa3IgACABdHEiAEEAIABrcWgiAUEDdCIFQYiawgBqKAIAIgBBCGoiBigCACICIAVBgJrCAGoiBUcEQCACIAU2AgwgBSACNgIIDAELQYicwgAgA0F+IAF3cTYCAAsgACAEQQNyNgIEIAAgBGoiBSABQQN0IgMgBGsiAUEBcjYCBCAAIANqIAE2AgBBkJzCACgCACICBEAgAkF4cUGAmsIAaiEAQZicwgAoAgAhAwJ/QYicwgAoAgAiBEEBIAJBA3Z0IgJxBEAgACgCCAwBC0GInMIAIAIgBHI2AgAgAAshAiAAIAM2AgggAiADNgIMIAMgADYCDCADIAI2AggLQZicwgAgBTYCAEGQnMIAIAE2AgAgBg8LQYicwgAgBCAGcjYCACAACyEEIAAgAjYCCCAEIAI2AgwgAiAANgIMIAIgBDYCCAtBmJzCACAFNgIAQZCcwgAgATYCAAwBCyADIAEgBGoiAEEDcjYCBCAAIANqIgAgACgCBEEBcjYCBAsMBAsDQCAAIAMgACgCBEF4cSIDIARPIAMgBGsiASACSXEiBRshAyABIAIgBRshAiAAKAIQIgEEfyABBSAAQRRqKAIACyIADQALIANFDQELIARBkJzCACgCACIATSACIAAgBGtPcQ0AIAMQ+wECQCACQRBPBEAgAyAEQQNyNgIEIAMgBGoiACACQQFyNgIEIAAgAmogAjYCACACQYACTwRAIAAgAhD3AQwCCyACQXhxQYCawgBqIQECf0GInMIAKAIAIgVBASACQQN2dCICcQRAIAEoAggMAQtBiJzCACACIAVyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIDAELIAMgAiAEaiIAQQNyNgIEIAAgA2oiACAAKAIEQQFyNgIECwwCCwJAAkACQAJAAkACQAJAAkACQAJAIARBkJzCACgCACIDSwRAQZScwgAoAgAiACAESw0EQQAhAiAEQa+ABGoiAEEQdkAAIgNBf0YiAQ0LIANBEHQiA0UNC0GgnMIAQQAgAEGAgHxxIAEbIgVBoJzCACgCAGoiADYCAEGknMIAQaScwgAoAgAiASAAIAAgAUkbNgIAQZycwgAoAgAiAkUNAUHwmcIAIQADQCAAKAIAIgEgACgCBCIGaiADRg0DIAAoAggiAA0ACwwDC0GYnMIAKAIAIQACQCADIARrIgFBD00EQEGYnMIAQQA2AgBBkJzCAEEANgIAIAAgA0EDcjYCBCAAIANqIgMgAygCBEEBcjYCBAwBC0GQnMIAIAE2AgBBmJzCACAAIARqIgI2AgAgAiABQQFyNgIEIAAgA2ogATYCACAAIARBA3I2AgQLIABBCGoPC0GsnMIAKAIAIgBFIAAgA0tyDQMMBwsgACgCDCABIAJLcg0AIAIgA0kNAwtBrJzCAEGsnMIAKAIAIgAgAyAAIANJGzYCACADIAVqIQFB8JnCACEAAkACQANAIAEgACgCAEcEQCAAKAIIIgANAQwCCwsgACgCDEUNAQtB8JnCACEAA0ACQCACIAAoAgAiAU8EQCABIAAoAgRqIgYgAksNAQsgACgCCCEADAELC0GcnMIAIAM2AgBBlJzCACAFQShrIgA2AgAgAyAAQQFyNgIEIAAgA2pBKDYCBEGonMIAQYCAgAE2AgAgAiAGQSBrQXhxQQhrIgAgACACQRBqSRsiAUEbNgIEQfCZwgApAgAhCSABQRBqQfiZwgApAgA3AgAgASAJNwIIQfSZwgAgBTYCAEHwmcIAIAM2AgBB+JnCACABQQhqNgIAQfyZwgBBADYCACABQRxqIQADQCAAQQc2AgAgAEEEaiIAIAZJDQALIAEgAkYNByABIAEoAgRBfnE2AgQgAiABIAJrIgBBAXI2AgQgASAANgIAIABBgAJPBEAgAiAAEPcBDAgLIABBeHFBgJrCAGohAwJ/QYicwgAoAgAiAUEBIABBA3Z0IgBxBEAgAygCCAwBC0GInMIAIAAgAXI2AgAgAwshACADIAI2AgggACACNgIMIAIgAzYCDCACIAA2AggMBwsgACADNgIAIAAgACgCBCAFajYCBCADIARBA3I2AgQgASADIARqIgBrIQRBnJzCACgCACABRwRAIAFBmJzCACgCAEYNBCABKAIEIgJBA3FBAUcNBQJAIAJBeHEiBUGAAk8EQCABEPsBDAELIAFBDGooAgAiBiABQQhqKAIAIgdHBEAgByAGNgIMIAYgBzYCCAwBC0GInMIAQYicwgAoAgBBfiACQQN2d3E2AgALIAQgBWohBCABIAVqIgEoAgQhAgwFC0GcnMIAIAA2AgBBlJzCAEGUnMIAKAIAIARqIgE2AgAgACABQQFyNgIEDAgLQZScwgAgACAEayIDNgIAQZycwgBBnJzCACgCACIAIARqIgE2AgAgASADQQFyNgIEIAAgBEEDcjYCBCAAQQhqIQIMBgtBrJzCACADNgIADAMLIAAgBSAGajYCBEGUnMIAKAIAIAVqIQBBnJzCAEGcnMIAKAIAIgNBD2pBeHEiAUEIazYCAEGUnMIAIAMgAWsgAGpBCGoiAjYCACABQQRrIAJBAXI2AgAgACADakEoNgIEQaicwgBBgICAATYCAAwDC0GYnMIAIAA2AgBBkJzCAEGQnMIAKAIAIARqIgE2AgAgACABQQFyNgIEIAAgAWogATYCAAwECyABIAJBfnE2AgQgACAEQQFyNgIEIAAgBGogBDYCACAEQYACTwRAIAAgBBD3AQwECyAEQXhxQYCawgBqIQECf0GInMIAKAIAIgJBASAEQQN2dCIFcQRAIAEoAggMAQtBiJzCACACIAVyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIDAMLQbCcwgBB/x82AgBB9JnCACAFNgIAQfCZwgAgAzYCAEGMmsIAQYCawgA2AgBBlJrCAEGImsIANgIAQYiawgBBgJrCADYCAEGcmsIAQZCawgA2AgBBkJrCAEGImsIANgIAQaSawgBBmJrCADYCAEGYmsIAQZCawgA2AgBBrJrCAEGgmsIANgIAQaCawgBBmJrCADYCAEG0msIAQaiawgA2AgBBqJrCAEGgmsIANgIAQbyawgBBsJrCADYCAEGwmsIAQaiawgA2AgBBxJrCAEG4msIANgIAQbiawgBBsJrCADYCAEH8mcIAQQA2AgBBzJrCAEHAmsIANgIAQcCawgBBuJrCADYCAEHImsIAQcCawgA2AgBB1JrCAEHImsIANgIAQdCawgBByJrCADYCAEHcmsIAQdCawgA2AgBB2JrCAEHQmsIANgIAQeSawgBB2JrCADYCAEHgmsIAQdiawgA2AgBB7JrCAEHgmsIANgIAQeiawgBB4JrCADYCAEH0msIAQeiawgA2AgBB8JrCAEHomsIANgIAQfyawgBB8JrCADYCAEH4msIAQfCawgA2AgBBhJvCAEH4msIANgIAQYCbwgBB+JrCADYCAEGMm8IAQYCbwgA2AgBBlJvCAEGIm8IANgIAQYibwgBBgJvCADYCAEGcm8IAQZCbwgA2AgBBkJvCAEGIm8IANgIAQaSbwgBBmJvCADYCAEGYm8IAQZCbwgA2AgBBrJvCAEGgm8IANgIAQaCbwgBBmJvCADYCAEG0m8IAQaibwgA2AgBBqJvCAEGgm8IANgIAQbybwgBBsJvCADYCAEGwm8IAQaibwgA2AgBBxJvCAEG4m8IANgIAQbibwgBBsJvCADYCAEHMm8IAQcCbwgA2AgBBwJvCAEG4m8IANgIAQdSbwgBByJvCADYCAEHIm8IAQcCbwgA2AgBB3JvCAEHQm8IANgIAQdCbwgBByJvCADYCAEHkm8IAQdibwgA2AgBB2JvCAEHQm8IANgIAQeybwgBB4JvCADYCAEHgm8IAQdibwgA2AgBB9JvCAEHom8IANgIAQeibwgBB4JvCADYCAEH8m8IAQfCbwgA2AgBB8JvCAEHom8IANgIAQYScwgBB+JvCADYCAEH4m8IAQfCbwgA2AgBBnJzCACADNgIAQYCcwgBB+JvCADYCAEGUnMIAIAVBKGsiADYCACADIABBAXI2AgQgACADakEoNgIEQaicwgBBgICAATYCAAtBACECQZScwgAoAgAiACAETQ0AQZScwgAgACAEayIDNgIAQZycwgBBnJzCACgCACIAIARqIgE2AgAgASADQQFyNgIEIAAgBEEDcjYCBCAAQQhqDwsgAg8LIANBCGoLyBgCGX8DfiMAQYAFayIEJAAgBCABNgJUIAMQPCETIAQgAigCGBA9IgU2AvgCIAUQLSEFIAQgAjYC2AIgBCAFNgLQAiAEQgA3A8gCIAQgBEH4Amo2AtQCIARBoARqIARByAJqEHhBBCEHAkAgBC0ArARBBEYNAAJAQQQgBEHQAmooAgAiBSAEKALMAmsiB0EAIAUgB08bQQFqIgVBfyAFGyIFIAVBBE0bIghB////H0sNACAIQQV0IgVBAEgNACAFIAhBgICAIElBAnQQ1AciBwRAIAcgBCkDoAQ3AgAgB0EYaiAEQbgEaiINKQMANwIAIAdBEGogBEGwBGoiDykDADcCACAHQQhqIARBqARqIhEpAwA3AgAgBEGYAmogBEHYAmooAgA2AgAgBEGQAmogBEHQAmopAwA3AwAgBCAEKQPIAjcDiAJBICEOQQEhBgNAIARBoARqIARBiAJqEHggBC0ArARBBEYNAyAGIAhGBEACf0EAIAggBCgCkAIiBSAEKAKMAmsiCUEAIAUgCU8bQQFqIgVBfyAFG2oiBSAISQ0AGiAEIAhBBXQ2AsQDIAQgBzYCwAMgBEEENgLIAyAEQeADakEEIAhBAXQiCSAFIAUgCUkbIgUgBUEETRsiCUEFdCAJQYCAgCBJQQJ0IARBwANqEOACIAQoAuQDIQUgBCgC4AMEQCAEKALoAwwBCyAJIQggBSEHQYGAgIB4CyEJIAUgCRCpBwsgByAOaiIFIAQpA6AENwIAIAVBGGogDSkDADcCACAFQRBqIA8pAwA3AgAgBUEIaiARKQMANwIAIA5BIGohDiAGQQFqIQYMAAsACwALEMYFAAsgBCgC+AIQLRogBEH4AmoQ1QcgBEEMOgCcAiAEQUBrELMGQQAhDiAEQfACakEANgIAIARB6AJqQoCAgICAATcDACAEQeQCakGQ2cEANgIAIARB4AJqQQA2AgAgBEIANwPYAiAEIAQpA0g3A9ACIAQgBCkDQDcDyAIgBEHYAmoiBUEAQQhBABCvByAFENQCIAcgBkEFdCIZaiEJIARBoARqQQRyIREgBEG0BGohEiAEQYkEaiEPIARB4ARqQQRyIRUgBEHgA2pBA3IhFCAEQcwEaiEWIARBzQNqIQ0gBEG1BGohFyAEQcwDaiEaIARBhwNqIRggByEFA0ACQAJAIA4gGUYEfyAJBSAEQZgDaiILIAVBCGooAgA2AgAgBS0ADCEGIAUpAgAhHSAEQYADaiIMIAVBFWopAAA3AwAgGCAFQRxqKAAANgAAIAQgHTcDkAMgBCAFKQANNwP4AiAGQQRHBEAgBEHIA2ogCygCACILNgIAIA0gBCkD+AI3AAAgDUEIaiAMKQMANwAAIA1BD2ogGCgAADYAACAEIAQpA5ADNwPAAyAEIAY6AMwDIAQoAsQDIQwgBEHgA2ogGhCRAyAEQThqIBMgDCALEAciChC8BSAEKAI8IQYCfyAEKAI4RQRAIAoQiwggBEGQBGogFEEIaikAADcDACAEQZgEaiAUQRBqLQAAOgAAIAQgFCkAADcDiAQCfgJAAkACQAJAAkACQAJAAkAgBC0A4ANBAWsOAwEAAwILIAYQ8wgNBEGVyMEAQSdBpMnBABDrBgALIAQxAOIDIR0gBDEA4QMhHiAGEPsIDQVBlcjBAEEnQbTJwQAQ6wYACyAGEO8IDQFBlcjBAEEnQcTJwQAQ6wYACyAGEPQIDQIgBEHwBGogBhA+IgoQigQgBCAEKAL0BAR/IBUgBCkD8AQ3AgAgFUEIaiAEQfgEaigCADYCAEEBBUECCzYC4AQgBEEHNgL4BCAEQYjIwQA2AvQEQQAhCyAEQQA2AvAEIARBoARqIARB4ARqIARB8ARqELQFIARBBjYCuAQgBEGPyMEANgK0BCAEQYAEaiIbIBJBCGooAgA2AgAgBCASKQIANwP4AyAEKAKgBCEMIAQoAqQEIRAgBCkDqAQhHiAKEIsIIAYQiwggBEGoA2ogGygCADYCACAEIAQpA/gDNwOgA0EKDAYLIAEoAgAhCiAEQagEaiAPQQhqKQAANwMAIAQgBjYCsAQgBCAPKQAANwOgBCAKIARBoARqEPcDIQZCACEdIAEoAgApAwAMAwsgASgCACEQIARBqARqIA9BCGopAAA3AwAgBCAGNgKwBCAEIA8pAAA3A6AEIARBGGogBEHUAGogECAEQaAEahD4AxDqB0ICIR0gBCgCICEGIAQpAxgMAgsgASgCACEQIARBqARqIA9BCGopAAA3AwAgBCAGNgKwBCAEIA8pAAA3A6AEIARBKGogBEHUAGogECAEQaAEahD5AxDqB0IDIR0gBCgCMCEGIAQpAygMAQsgBEEIaiAEQdQAaiABKAIAIAatIB1CKIYgHkIghoSEEM4EEOoHQgEhHSAEKAIQIQYgBCkDCAshHiAEQaAEaiAMIAsQmwQgBCAeNwO4BCAEIB03A7AEIARBqANqIBJBCGooAgA2AgAgBCAGNgLABCAEIBIpAgA3A6ADIAQoAqAEIQwgBCgCpAQhECAEKQOoBCEeIAQpA8AEIR8gHachC0EMDAELIARBoARqIAwgCxCbBCAGEIsIIARBuANqIBFBCGopAgA3AwAgBEGuA2ogF0ECai0AADoAACAEQagDaiAWQQhqKAIANgIAIAQgESkCADcDsAMgBCAXLwAAOwGsAyAEIBYpAgA3A6ADIAQoAqAEIRwgBCgCuAQhDCAEKAK8BCEQIAQpA8AEIR4gBCgCyAQhCyAEKQPYBCEfIAoQiwggBEHgA2oQtQZBCwshCiAEQcADahDBByAKQQxGDQMgBEGoBGogBEG4A2opAwAiHTcDACAEQeIDaiAEQa4Dai0AACIFOgAAIARByANqIgYgBEGoA2ooAgA2AgAgBEGUAmogHTcCACAEIAQpA7ADIh03A6AEIAQgHDYCiAIgBCAdNwKMAiAEIAQvAawDIg07AeADIAQgBCkDoAM3A8ADIAQgCjoAnAIgBEGfAmogBToAACAEIA07AJ0CIAQgCzYCsAIgBCAeNwOoAiAEIBA2AqQCIAQgDDYCoAIgBEG8AmogBigCADYCACAEIAQpA8ADNwK0AiAEIB83A8ACIAcgDmpBIGohBQwCCyAHIA5qQSBqCyEFQQwhCgsgCSAFayEGA0AgBgRAIAZBIGshBiAFEMEHIAVBIGohBQwBCwsgCARAIAcgCEEFdBCkCAsCQAJAAkAgCkEMRgRAIARB2ABqIARBjAFqIARBzAFqIARByAJqQTAQkglBMBCSCUEwEJIJGiABKAIAIgEpAwAhHSABQUBrKAIAIgZBAWoQ6wchBSAGIAEoAjhGDQEgASgCQCEIDAILIARByAFqIARBiAJqQcAAEJIJGiAEKALYAiIBBEAgBCgC5AIgAUECdEELakF4cWsQfgsgBCgC7AIgBCgC8AIQmQkgBCgC6AIgBCgC7AIQ3AcgBEGIAWoiASAEQcgBakHAABCSCRogAEEIaiABQcAAEJIJGiAAQgA3AwAgExCLCAwCCyABQThqIAYQ/AIgASgCQCIIIQYLIAEgCEEBajYCQCABQTxqKAIAIAZBAnRqIAM2AgAgAigCGBAAIQECQCACQSBqKAIAIgNFBEAgBEEANgLMAQwBCyAEQcgBaiADIAJBJGooAgAQlAULIAJBBGooAgAiAwR/IARBoARqIAMgAkEIaigCABDEASAEQawEaiACQRBqKAIAIAJBFGooAgAQxAEgBEGQAmogBEGwBGopAwA3AwAgBCAEKQOoBDcDiAIgBCgCoAQhDSAEKAKkBAVBAAshAiAAIAQpA4gCNwJIIARBkAFqIgMgBEHQAWooAgA2AgAgAEHQAGogBEGQAmopAwA3AgAgBCAEKQPIATcDiAEgBEGkBGogBEHYAGpBMBCSCRogACAFNgIIIAAgHTcDACAAQQxqIARBoARqQTQQkgkaIAAgATYCWCAAIAI2AkQgACANNgJAIAAgBCkDiAE3AlwgAEHkAGogAygCADYCACATIQMLIAMQiwggBEGABWokAA8LIAVBIGohBSAEIB4+AugDIAQgEDYC5AMgBCAMNgLgAyARIAQpA6ADNwIAIBFBCGogBEGoA2ooAgA2AgAgBCALNgKgBCAEIB83A7AEIA5BIGohDiAEQcADaiAEQcgCaiAEQeADaiAEQaAEahB1DAALAAvkFgILfwJ+IwBBwAJrIgYkACAAKQMAIREgAUHU58EAEM8HIQEgBiAFNgKUASAGIAI2AogBIAYgADYCgAEgBiABNgJ4IAYgETcDcCAGIAM2AowBIAYgBDYCkAEgBiACNgKcASAGQegBaiIIIAZB8ABqEKMDIgcgBigCgAEQjwQgBiAGKALwATYCqAEgBiAGKQPoATcDoAEgBkGAAmoiASgCACEKIAYoAvgBIQsgBigC/AEhACABIAZBqAFqIgw2AgAgBkH4AWogBK03AwAgBiADrTcD8AEgBkEAOgDoASAGQcgBaiAIEO8EAkACQAJAAkACQAJAIAYtAMgBBEAgBi0AyQEhBAwBCyAGQcABaiAGQeABaikDADcDACAGQbgBaiAGQdgBaikDADcDACAGIAYpA9ABNwOwASAGQegBaiALQfAAaiACEJUDIAYtAOgBBEAgBi0A6QEhBAwBC0ECIQNBHCEEAkACQAJAAkACQAJAAkACQAJAAkAgAg4DAQsLAAsgBkGAAmopAwBCAoNQBEBBAiEEDAsLIAZBmAJqLwEAIQ0gBkGQAmo1AgAhESAGQdgAaiAAQThqKAIAIABBPGooAgAgBikD8AEgBkH4AWooAgBB+InAABClBxCoBCAGKAJYIgJBCGohAEEfIQQgBi0AXCEIAkACQAJAAkACQAJAAkACQAJAQQEgAkGgAWooAgAiCUEKayAJQQlNG0EBaw4HBQQREQEDAgALIAAoAgAiAA0FQRwhBAwQCyAGQdQBakEBNgIAIAZB3AFqQQE2AgAgBkH0AWpBATYCACAGQfwBakEANgIAIAZBzOPBADYC0AEgBkEANgLIASAGQQk2AqQCIAZBxIrAADYC8AEgBkGolcIANgL4ASAGQQA2AugBIAYgBkGgAmo2AtgBIAYgBkHoAWo2AqACIAZByAFqQcyKwAAQgQYACyAAKAIAIgAgACgCACIBQQFqNgIAIAFBAEgNEiAGIAA2ArACIAJBEGotAAAhDiACQQxqKAIAIgEgASgCACIAQQFqNgIAIABBAEgNEiAGIAE2ArQCIAIgCEEARxCVCSAKIAooAgBBAWs2AgAQyAciAEEAOgDIASAAQoGAgIAQNwPAASAAQQE6AJwBIABCBDcClAEgAEIANwKMASAAQoCAgIDAADcChAEgAEEAOwGAASAAQgA3A0AgAEIANwMAIAYgADYCvAIgBkEBNgK4AiAGQegBaiICIAFBCGoQmAQgBkHQAGogAkGIisAAENEEIAYtAFQhDyAGKAJQIgJBEGooAgAiASACKAIEIgRGBEAgAkEEaiIBIAEoAgAiAxD9AiABKAIIIgggAyABKAIMIglrSwRAAkAgAyAIayIEIAkgBGsiCUsgASgCACIQIANrIAlPcUUEQCABKAIEIgMgECAEayIJQQN0aiADIAhBA3RqIARBA3QQlAkaIAEgCTYCCAwBCyABKAIEIgEgA0EDdGogASAJQQN0EJIJGgsLIAIoAgQhBCACKAIQIQELIA1BBHEhAyACIAFBAWo2AhAgAkEMaiIBIAQgASgCAEEBayIBaiIIIAEgBCAISxsiBDYCACACQQhqKAIAIARBA3RqIgQgADYCBCAEQQE2AgAgAiAPENwGAkACQAJAAkADQCAGKAKwAikDCCIRUARAIANFDQRBBiEEDAILIAYoArACIgAgEUIBfUIAIA4bIAApAwgiEiARIBJRGzcDCCARIBJSDQALIAYgETcDoAIgBkH4AWogBkHAAWopAwA3AwAgBkHwAWogBkG4AWopAwA3AwAgBiAGKQOwATcD6AEgBkHIAWogBkGgAmpBCCAGQaABaiAGQegBahCJASAGLQDIAUUNCCAGLQDJASIEQRtGDQELQQIhAwwCCyAGQcgAaiAHEPQEQQIhAyAGKAJIIgBBAkYNASAGKAJMIgRBCHYhASAAIQMMAQsgBkFAayAHEPQEIAYoAkAiA0ECRg0IIAYoAkQiBEEIdiEBCyAGQbgCahDHASAGQbQCahDpBiAGQbACahDqBgwRCyAGQThqIAJBDGooAgAgAkEQaigCACARp0GYisAAEMcGIAYoAjwhACAGKAI4IQMgBkH4AWogBkHAAWopAwA3AwAgBkHwAWogBkG4AWopAwA3AwAgBiAGKQOwATcD6AEgBkHIAWogAyAAIAZBoAFqIAZB6AFqEIkBIAYtAMgBRQ0EIAYtAMkBIgRBG0cNDCAGQTBqIAcQ9ARBAiEDIAYoAjAiAEECRg0NIAYoAjQiBEEIdiEBIAAhAwwNCyAGQfgBaiAGQcABaikDADcDACAGQfABaiAGQbgBaikDADcDACAGIAYpA7ABNwPoASAGQcgBaiAAIAZBoAFqIAZB6AFqEI8BIAYtAMgBRQ0DIAYtAMkBIgRBG0cNCyAGQShqIAcQ9AQgBigCKCIAQQJGDQwgBigCLCIEQQh2IQEgACEDDAwLIAZB+AFqIAZBwAFqKQMANwMAIAZB8AFqIAZBuAFqKQMANwMAIAYgBikDsAE3A+gBIAZByAFqIAAgBkGgAWogBkHoAWoQTyAGLQDIAUUNAiAGLQDJASIEQRtHDQogBkEgaiAHEPQEIAYoAiAiAEECRg0LIAYoAiQiBEEIdiEBIAAhAwwLCyACQQxqIgEoAgAhAyAGIBE3A/ABIAZCADcD6AEgBkHIAWoiBCAAIAZB6AFqIAMoAlQRAwAgBkGgAmogBBCsBiAGLQCgAgRAIAYtAKECIgRBG0cNCiAGQRhqIAcQ9ARBAiEDIAYoAhgiAEECRg0LIAYoAhwiBEEIdiEBIAAhAwwLCyAGQfgBaiAGQcABaikDADcDACAGQfABaiAGQbgBaikDADcDACAGIAYpA7ABNwPoASAGQcgBaiACKAIIIAEoAgAgBkGgAWogBkHoAWoQnQEgBi0AyAFFDQEgBi0AyQEiBEEbRw0JIAZBEGogBxD0BEECIQMgBigCECIAQQJGDQogBigCFCIEQQh2IQEgACEDDAoLIAYoAswBIQMgBkG4AmoQxwEgBkG0AmoQ6QYgBkGwAmoQ6gZBACECDAULIAYoAswBIQMgAiAIEIcIQQEhAgwECyAGQegBaiICIABBOGooAgAgAEE8aigCACALQaABahC3CCAGQcgBaiACENkFIAYtAMwBIgJBAkYNAiAGKALIASILEPcGIgAoAgAiAUUEQEEIIQQMAgsgBkH4AWogBkHAAWopAwA3AwAgBkHwAWogBkG4AWopAwA3AwAgBiAGKQOwATcD6AEgBkHIAWogASAAQQRqKAIAIAZBoAFqIAZB6AFqEJ0BIAYtAMgBBEAgBi0AyQEiBEEbRw0CIAZB6ABqIAcQ9AQgBigCaCIAQQJGDQIgBigCbCIEQQh2IQEgACEDDAILIAYoAswBIQMgCyACEIcIQQEhAgwECxDKBQALIAsgAhCHCAwHCyAGLQDIASIEQRtHDQUgBkHgAGogBxD0BCAGKAJgIgBBAkYNBiAGKAJkIgRBCHYhASAAIQMMBgsgBkHoAWoiACALQaABahDICCAGQQhqIABB3IrAABDQBEEIIQQgBi0ADCEAIAYoAggiB0EIaiAGQZwBahDOBSIBRQRAIAcgABCHCAwCCyABIAEpAyAgA618NwMgIAcgABCHCAsgBa0gDCADELgGQf8BcRCIB0H/AXEiBEHNAEcNACACBEAgCiAKKAIAQQFrNgIACyAGKAKoARCLCEEAIQQMBwtBAiEDIAINAwwEC0ECIQMLIAIgCBCHCAwBC0ECIQMLIAogCigCAEEBazYCAAsgBigCqAEQiwggA0ECRg0BQQgQUCIADQILAAsgBkHAAmokACAEQf8BcQ8LIAAgAzYCACAAIARB/wFxIAFBCHRyNgIEIAAQqAgAC9UVAhd/A34jAEHAA2siCSQAIAkCfyAGBEBBASAFLQAAQS9GDQEaC0EACzoAlgIgCUGABDsBlAIgCUEGOgCAAiAJIAY2AvwBIAkgBTYC+AFBfyEXA0AgCUHYAGogCUH4AWoQbCAJLQBgQQpHBEAgF0EBaiEXDAELCwJ/IAYEQEEBIAUtAABBL0YNARoLQQALIQogCUEANgJ4IAkgCjoAdiAJQYAEOwF0IAlBBjoAYCAJIAY2AlwgCSAFNgJYIAdBAWohHCAJQYECaiEKIAlBsAJqIRkgCUGIAmohGiAHQYABSSEdIAJBPGohGANAAkAgCUH4AWogCUHYAGoQbCAJLQCAAiIOQQpGBEAgAEEQaiAENgIAIAAgAzcDCCAAQQA6AAAMAQsgCUGPAWoiBSAKQQ9qIg8oAAA2AAAgCUGIAWoiBiAKQQhqIhApAAA3AwAgCSAKKQAAIiA3A4ABIAkgCSgCeCILQQFqNgJ4IAkpA/gBISEgCUGnAWoiESAFKAAANgAAIAlBoAFqIhIgBikDADcDACAJICA3A5gBIAQhBSADISACQAJAAkACQAJAAkACQAJAAkACQAJAA0AgHUUNDSAJQdAAaiACQThqIhsoAgAgGCgCACAgIAVB5JTBABClBxCoBCAJKAJQIgZBCGohByAJLQBUIRMCQAJAQQEgBkGgAWooAgAiDUEKayANQQlNG0EDaw4EBAMBAAULIAlB7AFqQQE2AgAgCUH0AWpBATYCACAJQYQCakEBNgIAIAlBjAJqQQA2AgAgCUHM48EANgLoASAJQQA2AuABIAlBCTYCtAMgCUGYlcEANgKAAiAJQaiVwgA2AogCIAlBADYC+AEgCSAJQbADajYC8AEgCSAJQfgBajYCsAMgCUHgAWpBoJXBABCBBgALIAlB+AFqIAEgBygCABDvAyAJLQD4AQRAIAktAPkBIQEgAEEBOgAAIAAgAToAAQwHCyAJKAKIAiEFIAkpA4ACISAgCUHgAWoiByAGQRBqKAIAIAZBFGooAgAQggYgBxDoAhogByAGQRxqKAIAIAZBIGooAgAQ5wIgCUH4AWoiDCAJKALkASIHIAkoAugBEJ8BIAlBsANqIAwQ0gYgCSgC4AEgBxCGCCAMEJkHIAYgE0EARxCVCSAMIAEgAiAgIAUgCSgCtAMiBSAJKAK4AyAcIAgQUyAJLQD4AUUEQCAJQcgAaiAbKAIAIBgoAgAgCSkDgAIiICAJKAKIAiIFQbCVwQAQpQcQ6wQgCSgCSCgCmAEhBiAJKAJMIgcgBygCAEEBazYCACAJKAKwAyAJKAK0AxCGCCAGQQpHIAsgF0dyDQEMDAsLIAktAPkBIQEgAEEBOgAAIAAgAToAASAJKAKwAyAFEIYIDAsLIAogCSkDmAE3AAAgECASKQMANwAAIA8gESgAADYAACAJIA46AIACIAkgITcD+AEgCUFAayAJQfgBahDxBCAJQeABaiAJKAJAIAkoAkQQnwECQCAJKALoASIEIAkoAuQBIAkoAuABIgsbIg0gCSgC7AEgBCALGyIEQcCVwQBBAhCbB0UEQCANIARBnsrBAEEBEJsHRQ0BCwwJCyAJQeABaiIEEJkHIAogCSkDmAE3AAAgECASKQMANwAAIA8gESgAADYAACAJIA46AIACIAkgITcD+AEgCUE4aiAJQfgBahDxBCAEIAkoAjggCSgCPBCfASAHIAkoAugBIgQgCSgC5AEgCSgC4AEiBRsgCSgC7AEgBCAFGxCRAiIFBEAgBSgCCCEEIAUpAwAhAyAJQeABahCZBwwICyAAQYGYATsBACAJQeABahCZBwwECyAKIAkpA5gBNwAAIBAgEikDADcAACAPIBEoAAA2AAAgCSAOOgCAAiAJICE3A/gBIAlBMGogCUH4AWoQ8QQgCUHgAWogCSgCMCAJKAI0EJ8BAkAgCSgC6AEiBCAJKALkASAJKALgASILGyINIAkoAuwBIAQgCxsiBEHAlcEAQQIQmwdFBEAgDSAEQZ7KwQBBARCbBw0JIAlB4AFqEJkHIAogCSkDmAE3AAAgECASKQMANwAAIA8gESgAADYAACAJIA46AIACIAkgITcD+AEgCUEoaiAJQfgBahDxBCAJQbABaiAJKAIoIAkoAiwQnwEgByAJKAK4ASIEIAkoArQBIAkoArABIgcbIAkoArwBIAQgBxsQkQIiDUUNASANKAIIIQQgDSkDACEDDAcLIAZBKGopAwBCAVINAiAGQThqKAIAIQUgBkEwaikDACEgDAgLIAlB4AFqIgQgBkHEAGooAgAgBkHIAGooAgAQggYgCiAJKQOYATcAACAQIBIpAwA3AAAgDyARKAAANgAAIAkgDjoAgAIgCSAhNwP4ASAEIAlB+AFqIgQQjQQgCSgC4AEhCyAEIAEoAmAgCSgC5AEiByAJKALoASIUIAEoAmQoAjwRBQAgCS0AmAIiBEECRg0CAkACQCAERQRAIAktAJkCDQEgCS0AmgINAiAJQewBakEBNgIAIAlB9AFqQQE2AgAgCUGEAmpBATYCACAJQYwCakEANgIAIAlBzOPBADYC6AEgCUEANgLgASAJQQk2ArQDIAlBoJbBADYCgAIgCUGolcIANgKIAiAJQQA2AvgBIAkgCUGwA2o2AvABIAkgCUH4AWo2ArADIAlB4AFqQaiWwQAQgQYACyAJQcABaiAHIBQQggYgCUEYahDzBCAJQQA2AtgBIAlCADcD0AEgCSkDICIDQiCIpyEEIAkpAxgiIkIgiKchHiADpyEVICKnIRZBDSEMIAUhHyAgISIMBgsgCUHQAWogByAUEIIGQQAhFUEKIQxBACEWDAULQoKAgICAv4kIEMYGIQEgAEEBOgAAIAAgAToAASALIAcQhgggCUGwAWoQmQcMAwsgAEGB7AA7AQAMAgsgAEGBBDsBACAJQeABahCZBwwBCyAAQYHYADsBACALIAcQhgggCUGwAWoQmQcLIAYgExCHCAwFCyAGIBNBAEcQlQkgGiAJKQPQATcDACAaQQhqIAlB2AFqKAIANgIAIBkgCSkDwAE3AwAgGUEIaiAJQcgBaigCADYCACAJIAQ2AoQCIAkgFTYCgAIgCSAeNgL8ASAJIBY2AvgBIAkgHzYCqAIgCSAiNwOgAiAJQgE3A5gCIAlBkNnBADYClAIgCSAMNgKQAyAJQbADaiIMIAcgFBCfASAJQaADaiIEIAwQ0gYgCUHgAWogASACIAlB+AFqQQAgBBCiASAJLQDgAQRAIAktAOEBIQEgAEEBOgAAIAAgAToAASAJQbADahCZByALIAcQhgggCUGwAWoQmQcMBQsgCSgC8AEhBCAJKQPoASEDIAlBsANqEJkHIAlBEGogGygCACAYKAIAICAgBUHElcEAEKUHEKgEIAktABQhFCAJKAIQIgVBoAFqKAIAQQ1GBEAgCiAJKQOYATcAACAQIBIpAwA3AAAgDyARKAAANgAAIAkgDjoAgAIgCSAhNwP4ASAJQQhqIAlB+AFqIhYQ8QQgCUHgAWoiFSAJKAIIIAkoAgwQnwEgCUGwA2oiDCAVENIGIBYgBUEIaiAMIAMgBBDlBSAVEJkHCyAFIBQQhwggCyAHEIYICyAJQbABahCZByANRQ0ECyAGIBMQhwgMAwsgCUHgAWoQmQcgBiATEIcICyAFIQQgICEDDAELCyAJQcADaiQAC98RAgZ/AX4jAEGgAmsiByQAIAApAwAhDSABQeTnwQAQzwchASAHQfgAaiIJIAA2AgAgB0HwAGogATYCACAHIAI2AoABIAcgDTcDaCAHIAY2AowBIAcgBTcDYCAHIAM2AoQBIAcgBDYCiAEgB0HYAWoiCyAHQegAahCjAyIAIAkoAgAQjwQgByAHKALgATYCmAEgByAHKQPYATcDkAEgB0HwAWoiCigCACEJIAcoAugBIQggBygC7AEhASAKIAdBmAFqIgw2AgAgB0HoAWogBK03AwAgByADrTcD4AEgB0EAOgDYASAHQbgBaiALEO8EAkACQAJAAkAgBy0AuAEEQCAHLQC5ASEEDAELIAdBsAFqIAdB0AFqKQMANwMAIAdBqAFqIAdByAFqKQMANwMAIAcgBykDwAE3A6ABIAdB2AFqIAhB8ABqIAIQlQMgBy0A2AEEQCAHLQDZASEEDAELQRwhBEECIQMCQAJAAkACQAJAAkACQAJAIAIOAwkCAQALIAdB8AFqKQMAQsQAg0LEAFIEQEECIQRBACECDAkLIAdBOGogAUE4aigCACABQTxqKAIAIAcpA+ABIAdB6AFqKAIAQbSMwAAQpQcQqAQgBygCOCIBQQhqIQhBACECQR8hBCAHLQA8IQoCQAJAAkACQAJAAkACQEEBIAFBoAFqKAIAIgtBCmsgC0EJTRtBAWsOBwUEDQ0CAwEACyAIKAIAIgQNBQtBHCEEDAsLIAdBxAFqQQE2AgAgB0HMAWpBATYCACAHQeQBakEBNgIAIAdB7AFqQQA2AgAgB0HM48EANgLAASAHQQA2ArgBIAdBCTYClAIgB0HwjMAANgLgASAHQaiVwgA2AugBIAdBADYC2AEgByAHQZACajYCyAEgByAHQdgBajYCkAIgB0G4AWpB+IzAABCBBgALIAdBMGogAUEMaigCACABQRBqKAIAIAWnQcSMwAAQxwYgBygCNCECIAcoAjAhAyAHQegBaiAHQbABaikDADcDACAHQeABaiAHQagBaikDADcDACAHIAcpA6ABNwPYASAHQbgBaiADIAIgB0GQAWogB0HYAWoQkgEgBy0AuAFFDQdBACECQQIhAyAHLQC5ASIEQRtHDQkgB0EoaiAAEPQEIAcoAigiAEECRg0JIAcoAiwiBEGAfnEhAiAAIQMMCQsgB0HoAWogB0GwAWopAwA3AwAgB0HgAWogB0GoAWopAwA3AwAgByAHKQOgATcD2AEgB0G4AWogCCAHQZABaiAHQdgBahC+ASAHLQC4AUUNBiAHLQC5ASIEQRtHDQggB0EgaiAAEPQEIAcoAiAiAEECRg0IIAcoAiQiBEGAfnEhAiAAIQMMCAsgB0HoAWogB0GwAWopAwA3AwAgB0HgAWogB0GoAWopAwA3AwAgByAHKQOgATcD2AEgB0G4AWogCCAHQZABaiAHQdgBahBvIActALgBRQ0FIActALkBIgRBG0cNByAHQRhqIAAQ9AQgBygCGCIAQQJGDQcgBygCHCIEQYB+cSECIAAhAwwHCyABQQxqIgIoAgAhAyAHIAU3A+ABIAdCADcD2AEgB0G4AWoiCCAEIAdB2AFqIAMoAlQRAwAgB0GQAmogCBCsBiAHLQCQAgRAQQAhAkECIQMgBy0AkQIiBEEbRw0HIAdBEGogABD0BCAHKAIQIgBBAkYNByAHKAIUIgRBgH5xIQIgACEDDAcLIAdB6AFqIAdBsAFqKQMANwMAIAdB4AFqIAdBqAFqKQMANwMAIAcgBykDoAE3A9gBIAdBuAFqIAEoAgggAigCACAHQZABaiAHQdgBahCeASAHLQC4AUUNBEEAIQJBAiEDIActALkBIgRBG0cNBiAHQQhqIAAQ9AQgBygCCCIAQQJGDQYgBygCDCIEQYB+cSECIAAhAwwGCyAHQdgBaiICIAFBOGooAgAgAUE8aigCACAIQaABahC2CCAHQbgBaiACENkFIActALwBIgFBAkYNAiAHKAK4ASIIEPcGIgIoAgAiBEUEQEEAIQJBCCEEDAILIAdB6AFqIAdBsAFqKQMANwMAIAdB4AFqIAdBqAFqKQMANwMAIAcgBykDoAE3A9gBIAdBuAFqIAQgAkEEaigCACAHQZABaiAHQdgBahCeASAHLQC4AQRAQQAhAiAHLQC5ASIEQRtHDQIgB0HYAGogABD0BCAHKAJYIgBBAkYNAiAHKAJcIgRBgH5xIQIgACEDDAILIAcoArwBIQQgCCABEIcIDAQLIAdB2AFqIgIgAUE4aigCACABQTxqKAIAIAhBoAFqELUIIAdBuAFqIAIQ2QUgBy0AvAEiAUECRwRAAkAgBygCuAEiCBD3BiICKAIAIgRFBEBBACECQQghBAwBCyAHQegBaiAHQbABaikDADcDACAHQeABaiAHQagBaikDADcDACAHIAcpA6ABNwPYASAHQbgBaiAEIAJBBGooAgAgB0GQAWogB0HYAWoQngEgBy0AuAEEQEEAIQIgBy0AuQEiBEEbRw0BIAdByABqIAAQ9AQgBygCSCIAQQJGDQEgBygCTCIEQYB+cSECIAAhAwwBCyAHKAK8ASEEIAggARCHCAwFCyAIIAEQhwgMBwtBACECIActALgBIgRBG0cNBiAHQUBrIAAQ9AQgBygCQCIAQQJGDQYgBygCRCIEQYB+cSECIAAhAwwGCyAIIAEQhwgMBQtBACECIActALgBIgRBG0cNBCAHQdAAaiAAEPQEIAcoAlAiAEECRg0EIAcoAlQiBEGAfnEhAiAAIQMMBAsgBygCvAEhBCABIAoQhwgLQQIhA0EAIQIgBq0gDCAEELgGQf8BcRCIB0H/AXEiBEHNAEcNAiAJIAkoAgBBAWs2AgAgBygCmAEQiwgMAwsgASAKEIcIDAELQQIhA0EAIQILIAkgCSgCAEEBazYCACAHKAKYARCLCCACIARB/wFxciECIANBAkYNAEEIEFAiAA0BAAsgB0GgAmokACACQf8BcQ8LIAAgAjYCBCAAIAM2AgAgABCoCAAL0xICDn8DfiMAQfACayILJAAgACkDACEZIAFBlOjBABDPByEBIAtBOGoiDyAANgIAIAtBMGogATYCACALIAZBD3EiDTsBUCALIAU2AkwgCyAENgJIIAsgAjYCQCALIBk3AyggCyAKNgJUIAsgCUEfcSIXOwFSIAsgCEL//////w+DIhs3AyAgCyAHQv//////D4M3AxggCyADNgJEIAtBuAFqIAtBKGoQowMgDygCABCHAyALIAsoAsABNgJgIAsgCykDuAE3A1ggC0HQAWotAAAhEyALKALMASEBQSUhAAJAAkAgBUGAgMAASw0AIAtBuAFqIAsoAsgBIgxB8ABqIg8gAhCVAyALLQC4AQRAIAstALkBIQAMAQtBAiEAIAtB0AFqKQMAIhpCgMAAg1ANACALQdgBaikDACEIIAtBuAFqIgAgBCALQdgAaiAFELsCIAtBoAFqIAAQxQUgCygCpAEiEUUEQCALLQCgASEADAELIAsoAqABIRQgC0HoAGogESALKAKoASIAEIMGIAtB+ABqIA8gAUEIaiIQIAIgESAAIANBAXEiDhDaASALQZABaiAMQdABaigCACAMQdQBaigCACgCRBEAAAJ/AkACQAJAAkAgCy0AeCISRQRAQQAhBCAIQsAAgyIZQgBSDQFBACEJQQAhBQwCCyANQQN2IQUgCUEBcSEJIA1BAXEhAyAGQQVxQQVGIQQgB6ciAEEGdkEBcQwEC0EBIQMgCUEBcSEJIAZBCHFBA3YhBSAGQQFxDQELQQAhAwwBCyAGQQRxQQJ2IQQLIAenIQAgGUIGiKcLIQ0gC0HgAGohFSAKrSEZIAtBnQFqIAU6AAAgC0GcAWogCToAACALQZsBaiADOgAAIAtBmgFqIAQ6AABBACEMIAtBmQFqIBqnIgpBBnYgDUEAR3EiDToAACALIAAgCnFBAnFBAXYiCjoAmAEgC0GYAWohFgJAAkACQAJAAkACQAJAAkACQAJAAkAgEkUEQCALIAFBQGsoAgAgAUHEAGooAgAgCykDgAEiByALQYgBaigCACIEQfiNwAAQpQcQqAQgCy0ABCEQQQEgCygCACICQaABaigCACIAQQprIABBCU0bQQFrDgcICAgBAgMIBAsgBkEBcUUEQCALLQB5IQAMCwtBNiEAIAZBAnENCiALQbgBaiAPIBAgAiALKAJsIAsoAnAgDhCDASALKALMASICRQRAIAstALgBIQAMCwsgCygC0AEhACALKALIASEGIAtBEGogAUFAaygCACABQcQAaigCACALKQO4ASIaIAsoAsABIhhB2I3AABClBxDrBCALKAIUIQMCQAJAAkACQAJAQQEgCygCECIMKAKYASIOQQprIA5BCU0bQQNrDgIAAQMLIAtBuAFqIg4gDEE8aigCACAMQUBrKAIAEIIGIA4gAiAAEI0JDAELIAtBADYCwAEgC0KAgICAEDcDuAEgC0G4AWogAiAAEI0JCyALKALAASEOIAsoArwBIQwgCygCuAEhEiADIAMoAgBBAWs2AgAgC0GcAWogCToAACALQZoBaiAEOgAAIAtBmQFqIA06AAAgCyAKOgCYASALQbgBaiALKAKQASAMIA4gFiALKAKUASgCDBEIACALKAK4ASIDDQEgCy0AvAEQ7gchACASIAwQhgggAEH/AXEhAAwLCyADIAMoAgBBAWs2AgBBHCEADAoLIAsoArwBIQkgC0EKNgLQAiALIA42AtABIAsgDDYCzAEgCyASNgLIASALQQA2AsABIAsgCTYCvAEgCyADNgK4ASALQeACaiIDIAIgABCUBSALQaABaiAPIBAgC0G4AWpBACADEKIBIAstAKABBEAgCy0AoQEhAAwKCyAKQQJyIAogDRsiA0EQciADIAQbIgNBCHIgAyAFGyEMIAtBsAFqKAIAIQQgCykDqAEhByALQQhqIAFBQGsoAgAgAUHEAGooAgAgGiAYQeiNwAAQpQcQqAQgCy0ADCEFIAsoAggiA0GgAWooAgBBDUcNBCALIAA2AqgBIAsgAjYCpAEgCyAGNgKgASALQbgBaiADQQhqIAtBoAFqIAcgBBDlBSADIAUQhwgMCAtBzAAhACAGQQJxRQ0FDAYLIAtBrAFqQQE2AgAgC0G0AWpBATYCACALQcQBakEBNgIAIAtBzAFqQQA2AgAgC0HM48EANgKoASALQQA2AqABIAtBCTYC5AIgC0HgjsAANgLAASALQaiVwgA2AsgBIAtBADYCuAEgCyALQeACajYCsAEgCyALQbgBajYC4AIgC0GgAWpB6I7AABCBBgALIAtBrAFqQQE2AgAgC0G0AWpBATYCACALQcQBakEBNgIAIAtBzAFqQQA2AgAgC0HM48EANgKoASALQQA2AqABIAtBCTYC5AIgC0GwjsAANgLAASAL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IgZBBHRqIgUoAgAiBEcEQCABIARHDQIgASACKAJAIgEgAigC0AEiBEF/c3FHDQIgASAEcUUNASADQgA3AzgMCAsgAiACKALIASAGQQFqTQR/IAIoAswBIAFBACACKALMAWtxagUgBAsgAigCACIEIAEgBEYiBBs2AgAgBEUNASADIAU2AjggAyACKALMASABaiIBNgI8IAUgATYCACAFQQxqKAIAIQEgBUEIaigCACEEIAUoAgQhBSACQYABahDpASAERQ0HIAMgATYCCCADIAQ2AgQgAyAFNgIADAgLIAMoAihBgJTr3ANHDQIgAyACNgIUIAMgA0EgajYCGCADIANBOGo2AhAQgwQiAQRAIAEoAgAhBCABQQA2AgAgBEUEQCADENcFNgJQIANBEGogA0HQAGoiARCbAiABEPgGDAILIARCADcCCCADIAQ2AgAgA0EQaiADEJsCIAEoAgAhBSABIAQ2AgAgAyAFNgJQIANB0ABqEJMIBSADENcFNgJQIANBEGogA0HQAGoiARCbAiABEPgGCwwACwALIANBgJTr3AM2AiggA0HIAGpBADYCACADQUBrQgA3AwAgA0IANwM4A0AgAigCACIBQQF2IghBH3EiBkEfRg0AIAIoAgQhBSABQQJqIQQCQCABQQFxRQRAIAggAigCQCIHQQF2Rg0BIAQgASAHc0E/S3IhBAsgBUUNASACIAQgAigCACIHIAEgB0YbNgIAIAEgB0cNASAGQR5GBEAgBRCUCCIBKALwAyEHIAIgATYCBCACIARBAmpBfnEgB0EAR3I2AgALIANBxABqIgEgBjYCACADIAU2AkAgBUUNBSAFIAEoAgAiAUEEdGoiBhCVCCAGKAIIIQcgBigCBCEEIAYoAgAhCEEAIQIgAUEBaiIBQR9HBEAgBiAGKAIMIgZBAnI2AgwgASECIAZBBHFFDQULQR4gAmsiAUEAIAFBHk0bIQEgAkEEdCAFakEMaiECA0AgAUUEQCAFEH4MBgsgAi0AAEECcUUEQCACIAIoAgAiBkEEcjYCACAGQQJxRQ0GCyABQQFrIQEgAkEQaiECDAALAAsgB0EBcQRAIANBADYCQAwFCyADKAIoQYCU69wDRw0BIAMgAjYCFCADIANBIGo2AhggAyADQThqNgIQEIMEIgEEQCABKAIAIQQgAUEANgIAIARFBEAgAxDX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AgQgABCoCAALQZ62wQBBGSAGQZABakGstcEAQbi2wQAQ6QMACxDGBQALAAsgABCLCCAFRQ0BCyAPIAkQ3wcLIAYoAlghAAsgABCLCAsgBkGwAmokACAHQf8BcQudDgIJfwJ+IwBBsAFrIgMkACADQShqIAEQ+wUgAygCLCEJIAMoAighAQJ/AkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAgRAIANBIGogASACQQAgAxBMQQEhBCADKAIkIQIgAygCIEUNAQwQCyABKQMQQgBSDQFBASEEQYzSwQBB+wAQOCECDA8LIAIQiwggASkDEFANAQsCQAJAIAFBIGpBmNPBABD4ASICRQRAIANB+ABqQQRyQZjTwQBBBhCbBAwBCyACKQMAUA0BIANBgAFqQQA2AgALIANB6ABqIANBhAFqKAIANgIAIAMgAykCfDcDYEGI1MEAQSIQOCECIANB4ABqELQHQQEhBAwOCyADQQAQQyIENgIwQQghBSACQQhqIgYgASgCeBCXBCECIANBITYCeCACKAIQQSEgBBBEIQIgA0EYahDgBiADKAIcIAIgAygCGCIEGyECIAQNASADIAI2AjQgA0H4AGoQ1QcgAyAGIAEoAngQlwQiASgCCCIENgI4IAMgAUEMaigCACIBNgI8AkAgAQ4CBAMACyADIAI2AkQgAyACEC02AlAgA0IANwNIIAMgA0E4ajYCWCADIANBxABqNgJUIANB+ABqIANByABqEPoDIAMoAnhBBkYEQCADQQA2AqgBIANCgICAgIABNwOgAQwFCyADQQhqQQQgA0HQAGoiASgCACICIAMoAkxrIgVBACACIAVPG0EBaiICQX8gAhsiAiACQQRNGxClBCADQYABaiIKKQMAIQwgA0GIAWoiCykDACENIAMoAgghBSADKAIMIgYgAykDeDcDACAGQRBqIA03AwAgBkEIaiAMNwMAIANB8ABqIANB2ABqKAIANgIAIANB6ABqIAEpAwA3AwAgAyADKQNINwNgQRghAUEBIQIDQCADQfgAaiADQeAAahD6AwJAIAMoAnhBBkcEQCACIAVHDQECf0EAIAUgAygCaCIEIAMoAmRrIgdBACAEIAdPG0EBaiIEQX8gBBtqIgQgBUkNABpBBCAFQQF0IgcgBCAEIAdJGyIEIARBBE0bIgdBGGwhCCAHQdaq1SpJQQN0IQQgAyAFBH8gAyAGNgKgASADIAVBGGw2AqQBQQgFQQALNgKoASADQZABaiAIIAQgA0GgAWoQ4AIgAygClAEhBCADKAKQAQRAIAMoApgBDAELIAchBSAEIQZBgYCAgHgLIQggBCAIEKkHDAELIAMgAjYCqAEgAyAGNgKkASADIAU2AqABDAYLIAEgBmoiBCADKQN4NwMAIARBEGogCykDADcDACAEQQhqIAopAwA3AwAgAUEYaiEBIAJBAWohAgwACwALQff4wQBBK0GI08EAEJEFAAsgAhDQASEBIANB+ABqENUHIANBMGoQ1QcMBAsgA0H4AGogBCACEMMBQRgQUCIBRQ0EIAEgAykDeDcDACABQRBqIANBiAFqKQMANwMAIAFBCGogA0GAAWopAwA3AwAgA0EBNgJoIAMgATYCZCADQQE2AmAgA0EQaiADQeAAahCEBCADKAIUIQEgAygCECEFCyADQTRqENUHDAELIAMgA0GgAWoQhAQgAygCBCEBIAMoAgAhBSADQcQAahDVBwsgA0EwahDVByAFRQ0AQQAhAiABRQ0GIAUQfgwGC0EBIQQgASABKAIAIgJBACACQQFHIgIbNgIAIAINAyADIAE2AnggASgCCCEGIAFBDGooAgAhBSABQRBqKAIAIQIgAUEUaigCACEHIANB+ABqELwGIAUhAQJAAkAgBkEBaw4DAAEFAQsgBSACKAIcIgERBwBC0OOG7bzIqJoQUQ0CC0EYEFAiAQ0CCwALIAUgAREHAELQ44btvMiomhBRDQIgAyACNgJ8IAMgBTYCeEGw+8EAQSsgA0H4AGpBtNbBAEGg18EAEOkDAAsgASAHNgIUIAEgAjYCECABIAU2AgwgASAGNgIIIAFCgYCAgBA3AgALIAMgATYCoAEgA0GEAWpBATYCACADQYwBakEBNgIAIANBxNPBADYCgAEgA0EANgJ4IANByQA2AkwgAyADQcgAajYCiAEgAyADQaABaiIFNgJIIANB4ABqIANB+ABqEMwDIAMoAmQiASADKAJoEDghAiADKAJgIAEQhgggBRDvBgwCCyAFKAIEIQIgBSgCACEBIAUQfiABRQ0AIAMgAjYCpAEgAyABNgKgASADQYQBakEBNgIAIANBjAFqQQE2AgAgA0GA1MEANgKAASADQQA2AnggA0E6NgJMIAMgA0HIAGo2AogBIAMgA0GgAWo2AkggA0HgAGogA0H4AGoQzAMgAygCZCIBIAMoAmgQOCECIAMoAmAgARCGCAwBC0EAIQRBAAwBCyACCyEBIAlBADYCACAAIAQ2AgggACABNgIEIAAgAjYCACADQbABaiQAC90OAQF/IwBBIGsiAiQAAn8CQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAALQAAQQFrDhgBAgMEBQYHCAkKCwwNDg8QERITFBUWFxgACyACQRRqQQE2AgAgAkEcakEANgIAIAJB5PjAADYCECACQaiVwgA2AhggAkEANgIIIAEoAgAgAUEEaigCACACQQhqEOYEDBgLIAJBFGpBATYCACACQRxqQQA2AgAgAkHI+MAANgIQIAJBqJXCADYCGCACQQA2AgggASgCACABQQRqKAIAIAJBCGoQ5gQMFwsgAkEUakEBNgIAIAJBHGpBADYCACACQbD4wAA2AhAgAkGolcIANgIYIAJBADYCCCABKAIAIAFBBGooAgAgAkEIahDmBAwWCyACQRRqQQE2AgAgAkEcakEANgIAIAJBnPjAADYCECACQaiVwgA2AhggAkEANgIIIAEoAgAgAUEEaigCACACQQhqEOYEDBULIAJBFGpBATYCACACQRxqQQA2AgAgAkGI+MAANgIQIAJBqJXCADYCGCACQQA2AgggASgCACABQQRqKAIAIAJBCGoQ5gQMFAsgAkEUakEBNgIAIAJBHGpBADYCACACQfT3wAA2AhAgAkGolcIANgIYIAJBADYCCCABKAIAIAFBBGooAgAgAkEIahDmBAwTCyACQRRqQQE2AgAgAkEcakEANgIAIAJB5PfAADYCECACQaiVwgA2AhggAkEANgIIIAEoAgAgAUEEaigCACACQQhqEOYEDBILIAJBFGpBATYCACACQRxqQQA2AgAgAkHI98AANgIQIAJBqJXCADYCGCACQQA2AgggASgCACABQQRqKAIAIAJBCGoQ5gQMEQsgAkEUakEBNgIAIAJBHGpBADYCACACQaT3wAA2AhAgAkGolcIANgIYIAJBADYCCCABKAIAIAFBBGooAgAgAkEIahDmBAwQCyACQRRqQQE2AgAgAkEcakEANgIAIAJBhPfAADYCECACQaiVwgA2AhggAkEANgIIIAEoAgAgAUEEaigCACACQQhqEOYEDA8LIAJBFGpBATYCACACQRxqQQA2AgAgAkHo9sAANgIQIAJBqJXCADYCGCACQQA2AgggASgCACABQQRqKAIAIAJBCGoQ5gQMDgsgAkEUakEBNgIAIAJBHGpBADYCACACQcz2wAA2AhAgAkGolcIANgIYIAJBADYCCCABKAIAIAFBBGooAgAgAkEIahDmBAwNCyACQRRqQQE2AgAgAkEcakEANgIAIAJBtPbAADYCECACQaiVwgA2AhggAkEANgIIIAEoAgAgAUEEaigCACACQQhqEOYEDAwLIAJBFGpBATYCACACQRxqQQA2AgAgAkGU9sAANgIQIAJBqJXCADYCGCACQQA2AgggASgCACABQQRqKAIAIAJBCGoQ5gQMCwsgAkEUakEBNgIAIAJBHGpBADYCACACQfT1wAA2AhAgAkGolcIANgIYIAJBADYCCCABKAIAIAFBBGooAgAgAkEIahDmBAwKCyACQRRqQQE2AgAgAkEcakEANgIAIAJB3PXAADYCECACQaiVwgA2AhggAkEANgIIIAEoAgAgAUEEaigCACACQQhqEOYEDAkLIAJBFGpBATYCACACQRxqQQA2AgAgAkG89cAANgIQIAJBqJXCADYCGCACQQA2AgggASgCACABQQRqKAIAIAJBCGoQ5gQMCAsgAkEUakEBNgIAIAJBHGpBADYCACACQaT1wAA2AhAgAkGolcIANgIYIAJBADYCCCABKAIAIAFBBGooAgAgAkEIahDmBAwHCyACQRRqQQE2AgAgAkEcakEANgIAIAJBiPXAADYCECACQaiVwgA2AhggAkEANgIIIAEoAgAgAUEEaigCACACQQhqEOYEDAYLIAJBFGpBATYCACACQRxqQQA2AgAgAkHs9MAANgIQIAJBqJXCADYCGCACQQA2AgggASgCACABQQRqKAIAIAJBCGoQ5gQMBQsgAkEUakEBNgIAIAJBHGpBADYCACACQdz0wAA2AhAgAkGolcIANgIYIAJBADYCCCABKAIAIAFBBGooAgAgAkEIahDmBAwECyACQRRqQQE2AgAgAkEcakEANgIAIAJBxPTAADYCECACQaiVwgA2AhggAkEANgIIIAEoAgAgAUEEaigCACACQQhqEOYEDAMLIAJBFGpBATYCACACQRxqQQA2AgAg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aw4ECQkBAAELIAEQ8AENBwsgAiAFTw0ACwwDCyAERQ0BIAFBHWohCANAAkAgAkH/AXEiBEECRwRAIARBAWsNBgwBCyAFAn8gASgCBCICRQRAIAhBAToAAEEBDAELIANBIGogARCnASADKAIgIQQgA0EQaiAJQQhqKQAANwMAIANBF2ogCUEPaigAADYAACADIAkpAAA3AwggAiAEayEGIAIgBEkNDCADKQIkIQ8gAy0ALCECIAEgBjYCBCACQf8BcUEKRw0NQQILIgJNDQEMBAsLIAFBHWpBADoAAAsgASgCBCIGQQFrIQQgBgRAIABBBjoACCABIAQ2AgQMDQsgBEEAQazJwAAQzQgACyABQR1qIQQDQAJAAkACQCACQf8BcUEBaw4CAQAFCyABKAIEIgJFBEBBASECIARBAToAAAwCCyADQSBqIAEQpwEgAygCICEIIANBEGogCUEIaikAADcDACADQRdqIAlBD2ooAAA2AAAgAyAJKQAANwMIIAIgCGshBiACIAhJDQogAykCJCEPIAMtACwhAiABIAY2AgQgAkH/AXFBCkcNC0ECIQIMAQtBACECIARBADoAACAKQQdxIgZBB0YNBQJAIAZBA2sOBAYGAQABCyABEPABDQQLIAIgBU8NAAsLIABBCjoACAwKCyAKQQZGDQgCQAJAIActAABBAWsOBQQGAAEGBQsgBygCCEF8Rg0JDAULIAcoAgggBygCECIEQQFqQQAgBBtqQX5GDQgMBAsgASgCBCIGQQFrIQQgBkUNBiAAQQc6AAggASAENgIEDAgLIABBBjoACAwHCyAHKAIIIAcoAhAiBEEBakEAIAQbakEIag0BDAULIAcoAghBfEYNBAsgACAKOgAIIAFBHWpBAzoAACAAIAEpAgA3AgAgACABQQlqKQAANwAJIABBEWogAUERaikAADcAACAAQRhqIAFBGGooAAA2AAAMBAsgBiACQZzJwAAQzQgACyAAIAI6AAggACAPNwIAIAAgAykDCDcACSAAQRFqIANBEGopAwA3AAAgAEEYaiADQRdqKAAANgAADAILIARBAEG8ycAAEM0IAAsgAEEKOgAIIAFBHWpBAzoAAAsgA0FAayQAC/oNAgp/AX4jAEHAA2siAyQAIAApAwAhDSABQdjmwQAQzwchASADIAI2AlAgAyAANgJIIAMgATYCQCADIA03AzggA0GIAmoiACADQThqEKMDIAMoAkgQjwQgA0GgAmooAgAhCyADKAKcAiEBIAMoApgCIQUgAygCkAIQiwggACAFQfAAaiIAIAIQlQMCQAJAIAMtAIgCDQAgAyACNgJcIANBiAJqIAAgAhDvAyADLQCIAg0AIAMpA5ACIQ0gAyADQZgCaigCACIANgKQAiADIA03A4gCAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAUE4aigCACABQTxqKAIAIA0gABCsBSICRQRAIAFBGGooAgBFDQEgASkDACABQQhqKQMAIA0gABDeAyENIAMgA0GIAmo2ArgDIAMgAUEQaiIANgJkIAAoAgAhACADIANBuANqNgJgIANBMGogACABQRxqIgAoAgAgDSADQeAAakHtABCYAyADKAIwRQ0BIAAoAgAiAEUNASAAIAMoAjRB6H1sakGIAmshAgsgAi0AhAIhCCADQShqIAIQqAQgAygCKCIAQQhqIQRBAiECIAMtACwhB0EBIABBoAFqKAIAIgZBCmsgBkEJTRtBAWsOBwECAw8ODgUEC0EIIQIMEAsgA0GMAWpBADYCACADQfgBakEJNgIAIANBAjsBYCADQYgCaiICIARBqAEQkgkaIAQgA0HgAGoiAUGoARCSCRogASACQagBEJIJGiABENUBDAMLIANBiAJqIgEQ5AQgAyADKAKMAiIFNgK0AyADIAMoAogCIgg2ArADIANBkAJqEMkBIAEQ5AQgA0GUAmooAgAhBiADKAKQAiEJIAEQhwIgASAAQSRqEOYIIAMoAogCDQMgA0GQAmoiAS0AACEKIAMoAowCIgIpAgQhDSACQQhqIAY2AgAgAiAJNgIEIAMgDTcDuAMgAiAKEP8HIANBiAJqIABBGGoQ5gggAygCiAINBCABLQAAIQYgAygCjAIiAikCBCENIAJBCGogBTYCACACIAg2AgQgAyANNwOwAyACIAYQ/wcgASAEQQhqKQIANwMAIABBFGpBADYCACADIAQpAgA3A4gCIAMoApQCIgEEQCADQZACaiADKAKIAiADKAKMAiABKAIIEQMACyADQbgDahDJASADQbADahCHAgwCCyADQSBqIABBxABqKAIAIABByABqKAIAEOsDIAMoAiAiBEUNCiADQYgCaiICIAQgAygCJBCfASADQeAAaiACENIGIAIQmQcgAEEoaikDAEIBUg0JIABBOGooAgAhAiAAQTBqKQMAIQ0gACAHQQBHEJUJIANBGGogAUE4aigCACABQTxqKAIAIA0gAkHQoMEAEKUHEKgEIAMoAhgiB0GgAWooAgBBDWtBAk8NBCADLQAcIQYgA0GIAmoiACAFQaABahDICCADQRBqIABBvKHBABDYBCADLQAUIQEgACADKAIQIgBBCGogA0HcAGoQ5QIgAykDiAJQDQUgACABEIcIIAhFDQcgB0EIaiEEIANBiAJqIgAgBUHYAWoiBRDjBiADQQhqIQIjAEEQayIBJAACQCAAKAIARQRAIAIgACkCBDcDACABQRBqJAAMAQsgASAAKQIENwMIQbD7wQBBKyABQQhqQYiNwQBB3KHBABDpAwALIAMoAgwhACADKAIIIgEoAghBAnQhCCABKAIEIQlBACECIAMoAlwhCkEAIQECQANAIAIgCEYNASACIAlqIQwgAkEEaiECIAFBAWohASAMKAIAIApHDQALIAAgACgCAEEBazYCACADQYgCaiIAIAQgA0HgAGoQvgIgACAFEPkEIAMgAEHsocEAENkEIAMoAgAiAEEQaigCACIEIAFBAWsiBU0NByADLQAEIQUgAEEMaigCACACaiICQQRrIAIgBCABa0ECdBCUCRogACAEQQFrNgIQIAAgBRCHCAwICyAAIAAoAgBBAWs2AgAMBwsgACkDCCENIABBADYCCCADIA03A4gCIANBiAJqENgGCyAAIAcQhwgMBgsgAyADKAKMAjYCYCADIANBkAJqLQAAOgBkQbD7wQBBKyADQeAAakHEt8EAQZC5wQAQ6QMACyADIAMoAowCNgJgIAMgAS0AADoAZEGw+8EAQSsgA0HgAGpB1LfBAEGgucEAEOkDAAtBpKHBAEGsocEAEJIFAAtB9/jBAEErQcyhwQAQkQUACyAFIARB/KHBABCABAALIAcgBhCHCCADKAJgIAMoAmQQhggLQQAhAgwECyADKAJgIAMoAmQQhggLQRwhAgsgACAHEIcIDAELIAMtAIkCIQILIAsgCygCAEEBazYCACADQcADaiQAIAJB/wFxC8sOAg1/A34jAEHwAWsiAyQAIANBOGogARD7BSADKAI8IQ0gAygCOCELAn8CQAJAIAIQ8ggEQCADQeAAakEANgIAIAMgAjYCWCADQQA2AkQgA0GoAWogCyACEJoCIAMoAqgBIQogAygCxAEiAUUNASADQfwAaiADQbwBaikCADcCACADQfQAaiADQbQBaikCADcCACADIAMpAqwBNwJsIAMgATYChAEgAyAKNgJoIAtBiAFqEOwHIAtBATYCiAEgC0GMAWogA0FAa0EoEJIJGhA1IQogA0GIAWogA0HoAGoQngUgA0EoahDzBCADQbgBaiEBQZDZwQAhAiADKQMwIRAgAykDKCERA0AgA0EgaiADQYgBahCABwJAAkAgAygCICIGBEAgAygCJCEMIAMgAjYCxAEgAyAHNgLAASADIAU2ArwBIAMgBDYCuAEgAyAQNwOwASADIBE3A6gBIAMgDDYCzAEgAyAGNgLIASAGKAIEIQIgAyAGKAIIIgQ2AtwBIAMgAjYC2AEgESAQIAIgBBC6ASEQIAMgA0HYAWo2AuQBIAMgATYC7AEgAyADQeQBajYC6AEgA0EYaiADKAK4ASADKALEASAQIANB6AFqQTkQmAMgAygCGEEAIAMoAsQBIgIbDQEgAygCvAFFBEAjAEHQAGsiAiQAIAIgA0GoAWo2AgggAUEIaigCACEFIAIgAkEIajYCDAJAAkAgBUEBaiIEBEAgASgCACIHIAdBAWoiDkEDdkEHbCAHQQhJGyIHQQF2IARJBEAgAkEoaiAFQRQgBCAHQQFqIgUgBCAFSxsQ+wIgAigCNCIFRQ0CIAIgAikDODcDICACIAU2AhwgAiACKQIsNwIUIAIgAigCKCIPNgIQQWwhB0EAIQQDQCAEIA5GBEAgASkCACERIAEgAikDEDcCACACQRhqIgQpAwAhEiAEIAFBCGoiBCkCADcDACAEIBI3AgAgAiARNwMQIAJBEGoQ5gYMBQsgASgCDCIIIARqLAAAQQBOBEAgAiAPIAUgAkEMaiABIAQQ/wUQ1QYgBSACKAIAQX9zQRRsaiIJIAcgCGoiCCkAADcAACAJQRBqIAhBEGooAAA2AAAgCUEIaiAIQQhqKQAANwAACyAEQQFqIQQgB0EUayEHDAALAAsgASACQQxqQTtBFBCgAQwCCxDIBQALIAIoAiwaCyACQdAAaiQAIAMoAsQBIQILIAMpA9gBIREgA0EQaiADKAK4ASACIBAQ1QYgAy0AFCEFIAMoAsQBIAMoAhBBbGxqIgJBFGsiBEEANgIQIARCgICAgMAANwIIIAQgETcCACADIAMoAsABQQFqNgLAASADIAMoArwBIAVBAXFrNgK8AQwCCyAEQQFqIQEgAikDACEQIAMgBAR/IAIgAUEUbEEHakF4cSIGayEFIAQgBmpBCWohBEEIBUEACzYC0AEgAyAENgLMASADIAU2AsgBIAMgBzYCwAEgAyACNgK4ASADIAEgAmo2ArQBIAMgAkEIajYCsAEgAyAQQn+FQoCBgoSIkKDAgH+DNwOoAQNAAkAgA0GoAWoQ1QMiAgRAIAJBFGsiASgCACIHDQELAkAgAygCwAFFDQADQCADQagBahDVAyIBRQ0BIAFBFGsiAUEIaigCACABQQxqKAIAEM4HDAALAAsCQCADKALQAUUNACADKALMAUUNACADKALIARB+CyADQfgAahDWA0EAIQJBAAwICyABQQxqKAIAIQQgAUEIaigCACEMIAFBBGooAgAhCSACQQRrKAIAQQxsIQEQNSEGIAQhAgNAAkAgAQRAIAIoAgAiCA0BCyAMIAQQzgcgAyAHIAkQByIBNgLYASADIAY2AugBIANBiAFqIAogASAGEPAEIAMtAIgBIAMoAowBQdTxwQBBLkGE8sEAEOoFIANB6AFqENUHIANB2AFqENUHDAILIAIoAgghBSADIAggAigCBBAHIgg2AtgBIANBCGogBSkDACAFQRBqKAIAELEHIAMgAygCCCADKAIMIAsoAngQkAQoAgAQACIFNgLoASADQYgBaiAGIAggBRDwBCADLQCIASADKAKMAUG08MEAQTBBxPHBABDqBSABQQxrIQEgAkEMaiECIANB6AFqENUHIANB2AFqENUHDAALAAsACyACIAMoAhxBbGxqIQILIAZBFGooAgAhBSAGQRBqKAIAIQcgAkEUayIJQRBqIgYoAgAiBCAJQQhqIgkoAgBGBEAgCSAEEP4CIAYoAgAhBAsgAkEIaygCACAEQQxsaiICIAw2AgggAiAFNgIEIAIgBzYCACAGIAYoAgBBAWo2AgAgAygCxAEhAiADKALAASEHIAMoArwBIQUgAygCuAEhBCADKQOwASEQIAMpA6gBIREMAAsAC0G3zsEAQc8AEDghCiACEIsIDAELIANBQGsQ+gULIAohAkEBCyEBIA1BADYCACAAIAE2AgggACACNgIEIAAgCjYCACADQfABaiQAC8ML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IAcgBSACIARBGGoQiQEgBC0AMEUEQCAEIAU2AhQgASgCBCICIAVJDQMgASACIAVrNgIEIAEgASgCACAFajYCACAAQQA6AAAgACAFNgIEDAQLIAQtADEhASAAQQE6AAAgACABOgABDAMLIABBgTo7AQAgBSAKENwGDAILIAQgBC0AIDoANCAEIAQoAhw2AjBBsPvBAEErIARBMGpB8N/BAEH42cEAEOkDAAsgBEE8akE1NgIAIARBJGpBAjYCACAEQSxqQQI2AgAgBEHY4MEANgIgIARBADYCGCAEQTU2AjQgBCACNgIIIAQgBEEwajYCKCAEIARBCGo2AjggBCAEQRRqNgIwIARBGGpBxOHBABCBBgALIARBQGskAAvBBQEHfyMAQdAAayIDJAAgAS0ABCEFIAFBAjoABAJAAkACQAJAIAVBAkcEQCABKAIAIQQgASgAECEGIAEoAAwhByABKAAIIQEgA0GAAjsBICADQQA2AgwgAigCACIIIAgoAgAiCUEBajYCACAJQQBIDQEgAyAINgJAIAMgATYCOCADIANBCGo2AjwgBEEcaiADQThqEI0FIARBBGoQnQIgBCAFEPkHAkACQAJAAkACQCACIAcpAwAgBygCCBCXBkEBaw4DAwIBAAtBhPrBAEEoQcywwQAQkQUACyADQQhqIgEQ5QggA0EANgI8IAEgA0E4ahDRBSADKAI8RQ0FIAAgAykDODcCACAAQRBqIANByABqKQMANwIAIABBCGogA0FAaykDADcCAAwCCyADQThqIAYQ+gQgAygCOARAIAMgAygCPDYCKCADIANBQGstAAA6ACxBsPvBAEErIANBKGpBzK/BAEGssMEAEOkDAAsgA0FAayICLQAAIQQgA0E4aiADKAI8IgVBHGogARDfBCADKAJARQ0GIANBMGoiASACKAIANgIAIAMgAykDODcDKCABEPgGIAUgBBD5ByAAQQA2AgQgAEEBOgAADAELIANBOGogBhD6BCADKAI4BEAgAyADKAI8NgIoIAMgA0FAay0AADoALEGw+8EAQSsgA0EoakHMr8EAQbywwQAQ6QMACyADQUBrIgItAAAhBCADQThqIAMoAjwiBUEcaiABEN8EIAMoAkBFDQQgA0EwaiIBIAIoAgA2AgAgAyADKQM4NwMoIAEQ+AYgBSAEEPkHIABBADYCBCAAQQA6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AiggAiACNgIgIAEoAgAgACACQQhqEOYEDAYLIAJBLGpBATYCACACQTRqQQE2AgAgAkH81sAANgIoIAJBADYCICACQRw2AgwgAiAANgI8IAFBBGooAgAhACACIAJBCGo2AjAgAiACQTxqNgIIIAEoAgAgACACQSBqEOYEDAULIAAgARChAwwECyACIAA2AjwgAkEsakEBNgIAIAJBNGpBATYCACACQfjawAA2AiggAkEANgIgIAJBIDYCDCABQQRqKAIAIQAgAiACQQhqNgIwIAIgAkE8ajYCCCABKAIAIAAgAkEgahDmBAwDCyACQSxqQQE2AgAgAkE0akEANgIAIAJB0NrAADYCKCACQaiVwgA2AjAgAkEANgIgIAEoAgAgAUEEaigCACACQSBqEOYEDAILIABBGGogARCuAQwBCyACQSxqQQI2AgAgAkE0akEBNgIAIAJBmNrAADYCKCACQQA2AiAgAkEcNgIMIAIgADYCPCABQQRqKAIAIQAgAiACQQhqNgIwIAIgAkE8ajYCCCABKAIAIAAgAkEgahDmBAshACACQUBrJAAgAAuiBQEHfyMAQTBrIgMkACABLQAEIQUgAUECOgAEAkACQAJAAkAgBUECRwRAIAEoAgAhBCABKAAQIQYgASgADCEHIAEoAAghASADQYACOwEMIANBADYCBCACKAIAIgggCCgCACIJQQFqNgIAIAlBAEgNASADIAg2AiggAyABNgIgIAMgAzYCJCAEQRxqIANBIGoQjQUgBEEEahCdAiAEIAUQ+QcCQAJAAkACQAJAIAIgBykDACAHKAIIEJcGQQFrDgMDAgEAC0GE+sEAQShBzLDBABCRBQALIAMQ4wggAygCBCEBIANBADYCBCABRQ0FIAMoAgAhAiAAIAMoAgg2AgggACABNgIEIAAgAjYCAAwCCyADQSBqIAYQ+gQgAygCIARAIAMgAygCJDYCECADIANBKGotAAA6ABRBsPvBAEErIANBEGpBzK/BAEGssMEAEOkDAAsgA0EoaiICLQAAIQQgA0EgaiADKAIkIgVBHGogARDfBCADKAIoRQ0GIANBGGoiASACKAIANgIAIAMgAykDIDcDECABEPgGIAUgBBD5ByAAQQA2AgQgAEEBOgAADAELIANBIGogBhD6BCADKAIgBEAgAyADKAIkNgIQIAMgA0Eoai0AADoA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aigCACIAIAAoAgBBAWs2AgAMAQsgAygCDCEHIAMgASAGEOsDIAMoAgAiBkUEQEEOIQAMAwsgA0EQaiAGIAMoAgQQhQUgA0EgaiAEIAAgBxDyAyADLQAgBEAgAy0AISEADAILIANBIGogBCADKAIkIgAgA0EQahDbAgJAIAMoAiAiBEECRwRAIAQNAUEBIQAMAwsgAy0AJCEADAILIAMoAighBCADKAIkIQcgAygCECADKAIUEIYIIAIgARCGCCAFIAUoAgBBAWs2AgAgA0EgaiAIEKcEIANBKGotAAAhAiADKAIkIQEgAygCIEUEQCADQSBqIgUgAUEIaiAEQeDqwAAQ5AIgBRDqBCABQRRqKAIAIAFBGGooAgAgACAHEO0DIQAgASACEMwEDAULIAEgAhDFBwtBBCEADAMLIAMoAhAgAygCFBCGCAsgAiABEIYICyAFIAUoAgBBAWs2AgALIANB8ABqJAAgAAvlAwEGfyMAQTBrIgQkAAJAAkACQAJAAkACQAJAAkAgAUEMaigCACICBEAgASgCCCEFIAJBAWtB/////wFxIgJBAWoiA0EHcSEGAn8gAkEHSQRAQQAhAyAFDAELIAVBPGohAiADQfj///8DcSEHQQAhAwNAIAIoAgAgAkEIaygCACACQRBrKAIAIAJBGGsoAgAgAkEgaygCACACQShrKAIAIAJBMGsoAgAgAkE4aygCACADampqampqamohAyACQUBrIQIgB0EIayIHDQALIAJBPGsLIQIgBgRAIAJBBGohAgNAIAIoAgAgA2ohAyACQQhqIQIgBkEBayIGDQALCyABQRRqKAIADQEgAyECDAQLQQAhAiABQRRqKAIARQ0BDAILIAUoAgQgA0EQT3INAQwDC0EBIQMMAwsgAyADaiICIANJDQELIAJFDQAgAkEASA0CIAIQUCIDDQEAC0EBIQNBACECCyAAQQA2AgggACADNgIEIAAgAjYCACAEIAA2AgwgBEEgaiABQRBqKQIANwMAIARBGGogAUEIaikCADcDACAEIAEpAgA3AxAgBEEMakHgkMAAIARBEGoQkwFFDQFBpJHAAEEzIARBKGpB2JHAAEGAksAAEOkDAAsQxgUACyAEQTBqJAALhAQBAn8jAEFAaiICJAACfwJAAkACQAJAQQIgACgCECIDQQJrIANBAkkbQQFrDgMBAgMACyACQRRqQRw2AgAgAkEsakECNgIAIAJBNGpBAjYCACACQczYwAA2AiggAkEANgIgIAJBHTYCDCACIAA2AhwgAiAAQQRqNgI8IAFBBGooAgAhACACIAJBCGo2AjAgAiACQTxqNgIQIAIgAkEcajYCCCABKAIAIAAgAkEgahDmBAwDCyACQSxqQQE2AgAgAkE0akEBNgIAIAJBmNjAADYCKCACQQA2AiAgAkEcNgIMIAIgADYCPCABQQRqKAIAIQAgAiACQQhqNgIwIAIgAkE8ajYCCCABKAIAIAAgAkEgahDmBAwCCyACQRRqQR42AgAgAkEsakECNgIAIAJBNGpBAjYCACACIAA2AhwgAkHw18AANgIoIAJBADYCICACQR42AgwgAiAAQRBqNgI8IAFBBGooAgAhACACIAJBCGo2AjAgAiACQTxqNgIQIAIgAkEcajYCCCABKAIAIAAgAkEgahDmBAwBCyACQSxqQQE2AgAgAkE0akEBNgIAIAJByOHAADYCKCACQQA2AiAgAkEcNgIMIAIgADYCPCABQQRqKAIAIQAgAiACQQhqNgIwIAIgAkE8ajYCCCABKAIAIAAgAkEgahDmBAshACACQUBrJAAgAAu1BAIEfwh+IwBBoAJrIgQkACAAKQMAIQggAUG058EAEM8HIQEgBCADNgI8IAQgAjYCOCAEIAA2AjAgBCABNgIoIAQgCDcDICAEQRBqIARBIGoQowMgBCgCMBCFAyAEIAQoAhgiATYCSCAEIAQpAxA3A0AgBEHgAWoiACADIARBQGsQmQggBEGgAWogABCZBgJAIAQtALABQQlGBEAgBC0AoAEhAwwBCyAEQdAAaiAEQaABaiIGQcAAEJIJGiAEIAQoAjA2AvABIAQgBCgCKDYC6AEgBCAEKQMgNwPgASAEQeABaiIFIAIgAxCxASECIAQgBEEgahCjAyAEKAIwEIUDIAQgBCgCCCIHNgKYASAEIAQpAwA3A5ABIAUgA60iCCAEQZgBaiIAEKQFIAYgBRCZBgJAIAQtALABIgVBCUYEQCAELQCgASEDDAELIAQpA9gBIQkgBCkD0AEhCiAEKQPIASELIAQpA8ABIQwgBCkDuAEhDSAEKQOoASEOIAQpA6ABIQ8gBEHgAWoiAyAEQdAAakHAABCSCRogCCAAIAMQ0QZB/wFxEIgHQf8BcSIDQc0ARw0AIAQgCTcDkAIgBCAKNwOIAiAEIAs3A4ACIAQgDDcD+AEgBCANPgL0ASAEIAU6APABIAQgDjcD6AEgBCAPNwPgASAIIAAgBEHgAWoQiAZB/wFxEIgHQf8BcSIDQc0ARw0AIAJB/wFxIQMLIAcQiwgLIAEQiwggBEGgAmokACADQf8BcQuSBAIGfwF+IwBBgAFrIgUkACAAKQMAIQsgAUHE58EAEM8HIQEgBUEwaiIHIAA2AgAgBUEoaiABNgIAIAUgAjYCOCAFIAs3AyAgBSAENwNAIAUgAzcDGCAFQcgAaiIIIAVBIGoQowMgBygCABCPBCAFQeAAaiIBKAIAIQcgBSgCXCEAIAUoAlghBiAFKAJQEIsIIAggBkHwAGogAhCVAwJAIAUtAEgEQCAFLQBJIQIMAQtBAiECIAEpAwBCgAKDUA0AQRwhAiADIAMgBHwiA1YNACAFQRBqIABBOGooAgAgAEE8aigCACAFKQNQIgQgBUHYAGooAgAiCUHAh8EAEKUHEKgEQQghAiAFKAIQIgFBCGohBiAFLQAUIQgCQAJAAkACQAJAQQEgAUGgAWooAgAiCkEKayAKQQlNG0EBaw4HBAQAAAQBBAILQR8hAgwDCyAGIAOnEOoBDAELIAYoAgAiBkUNASAGIAMgAUEMaigCACgCiAEREQBB/wFxEJAHQf8BcSICQc0ARw0BCyABIAgQhwggBUHIAGoiASAAQThqKAIAIABBPGooAgAgBCAJQdCHwQAQpQdBsAFqEMgIIAVBCGogAUHgh8EAENYEIAUtAAwhACAFKAIIIgFBKGogAzcDACABIAAQhwhBACECDAELIAEgCBCHCAsgByAHKAIAQQFrNgIAIAVBgAFqJAAgAkH/AXELoQQBBn8jAEHAAWsiAyQAIANB6ABqIgQgABCjAyAAQRBqKAIAEI8EIAMgAygCcCIHNgIQIAMgAykDaDcDCCADQYABaiIGKAIAIQUgAygCfCEAIAQgAygCeEHwAGoiCCABEJUDAkACQCADLQBoBEAgAy0AaSEEDAELQQIhBCAGKQMAQoCAgAGDUA0AIANBqAFqIAggARDvAwJAIAMtAKgBRQRAIABBOGooAgAgAEE8aigCACADKQOwASADQbgBaigCAEHolsEAEKUHIgBBsAFqIgEQpgcgAEG0AWotAABFDQEgAyABNgKsASADIABBuAFqNgKoAUGw+8EAQSsgA0GoAWpBqI3BAEH4lsEAEOkDAAsgAy0AqQEhBAwBCyADIAApALkBNwNYIAMgAEHAAWopAAA3AF8gAEHIAWotAAAhASAALQC4ASEEIANB6ABqIABByQFqQS8QkgkaIAAgACgCsAFBAWs2ArABIAFBCUYNACADIAMpAF83AE8gAyADKQNYNwNIIANBGWoiACADQegAaiIGQS8QkgkaIANB8ABqIAMpAE83AAAgAyAEOgBoIAMgAykDSDcAaSADIAE6AHggA0H5AGogAEEvEJIJGiACrSADQRBqIAYQ0QZB/wFxEIgHQf8BcSIEQc0ARw0AIAUgBSgCAEEBazYCACAHEIsIQQAhBAwBCyAFIAUoAgBBAWs2AgAgBxCLCAsgA0HAAWokACAEC9EDAQh/IwBBIGsiByQAIAdBEGoiBCABKAIAQQhqEOYIIAdBCGogBEHks8EAEOAEIActAAwhCiAHKAIIIgRBEGoiASgCACEFIAFBADYCACAFIAMgBSADIAVJGyIGayEJQQAhAQNAIAEgBkYEQCAFIARBEGooAgAiAWohCCAEQRBqAn8CQAJAIAFFBEAgAyAFSQ0BIARBADYCDEEADAMLIAMgBU8NASAEKAIMIQIgASAJSwRAIAQoAgQiAyAEQQhqKAIAIAIgASAGamoiBSADQQAgAyAFTRtrIAEgAmoiASADQQAgASADTxtrIAkQzAEMAgsgBCgCBCIDIARBCGooAgAgAiACIAZqIgIgA0EAIAIgA08bayABEMwBIAQgBCgCDCAGaiIBIAQoAgQiAkEAIAEgAk8bazYCDAwBCyAEIAQoAgwgBmoiASAEKAIEIgJBACABIAJPG2s2AgwLIAggBmsLNgIAIABBBDoAACAAIAY2AgQgBCAKEPkHIAdBIGokAA8LIAEgA0cEQCABIAJqIARBCGooAgAgBCgCDCIIIAQoAgQiC0EAIAEgCGogC08ba2ogAWotAAA6AAAgAUEBaiEBDAELCyADIANB9LPBABD/AwAL/gMBB38jAEFAaiIDJAACQAJAAkAgAS0ACARAIANBIGogASgCBEEIahCnBCADQShqLQAAIQcgAygCJCEFIAMoAiANASABKAIAIgQgBUEYaigCAEkEQCAFQRRqKAIAIARB0ABsaiIGKAIARQ0DCyADQSxqQQI2AgAgA0E0akEBNgIAIANBlPHAADYCKCADQQA2AiAgA0EBNgI8IAMgATYCOCADIANBOGo2AjAgA0EQaiIBIANBIGoiAhDLAyACQQAgARDyBiAAIAMpAyA3AgAgBSAHEMwEDAMLIANBLGpBAjYCACADQTRqQQE2AgAgA0Hk8MAANgIoIANBADYCICADQQE2AjwgAyABNgI4IAMgA0E4ajYCMCADQRBqIgEgA0EgaiICEMsDIAJBASABEPIGIAAgAykDIDcCAAwCCyADQRBqQSdBpPHAAEEeEIsFIAUgBxDFByAAIAMpAxA3AgAMAQsgA0EIaiAGQcgAaigCACAGQcwAaigCACAGQUBrKAIAIghB2PLAABDiBSADKAIIIQkgAygCDCIBIAIoAggiBEsEQCACKAIAIgQgAUkEQCACIAEgBGsQlAMLIAIgATYCCCABIQQLIAIoAgQgBCAJIAFB6PLAABD9BiAAIAE2AgQgBiABIAhqNgJAIABBBDoAACAFIAcQzAQLIANBQGskAAv+BAEFfyMAQSBrIgAkABDdAiIBQRBqIgJBACACKAIAIgIgAkECRiICGzYCAAJAAkACQAJAAkAgAkUEQCABQRRqIgItAAAhAyACQQE6AAAgACADQQFxIgM6AAQgAw0BQQAhA0GMncIAKAIAQf////8HcQRAEJgJQQFzIQMLIAEtABUNAiABIAEoAhAiBEEBIAQbNgIQIARFDQUgBEECRw0DIAEoAhAhBCABQQA2AhAgACAENgIEIARBAkcNBAJAIAMNAEGMncIAKAIAQf////8HcUUNABCYCQ0AIAFBAToAFQsgAkEAOgAACyABIAEoAgAiAkEBazYCACACQQFGBEAgARCVBQsgAEEgaiQADwsgAEEANgIcIABBqJXCADYCGCAAQQE2AhQgAEH03cEANgIQIABBADYCCCAAQQRqIABBCGoQrQQACyAAIAM6AAwgACACNgIIQbD7wQBBKyAAQQhqQZTOwABB2M7AABDpAwALIABBFGpBATYCACAAQRxqQQA2AgAgAEGAz8AANgIQIABBqJXCADYCGCAAQQA2AgggAEEIakGIz8AAEIEGAAsgAEEANgIcIABBqJXCADYCGCAAQQE2AhQgAEG4z8AANgIQIABBADYCCCMAQSBrIgEkACABQZDOwAA2AgQgASAAQQRqNgIAIAFBGGogAEEI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IQUgAykDGEGs5cEAEO0HIAVEAAAAAAAA4MNmIQEgAEL///////////8AAn4gBZlEAAAAAAAA4ENjBEAgBbAMAQtCgICAgICAgICAfwtCgICAgICAgICAfyABGyAFRP///////99DZBtCACAFIAVhGzcDCAwCCyADQShqIAIQhwYgAysDMCEFIAMpAyhBnOXBABDtByAAIAW2OAIEDAELIANBOGogAhCHBiADKwNAIQUgAykDOEGM5cEAEO0HIAAgBTkDCAsgACAENgIAIANBkAFqJAALtwMBDX8jAEEQayIEJABBBCEIAkACQCACBEAgAkHmzJkzSw0BIAJBFGwiBkEASA0BIAYgAkHnzJkzSUECdBDUByIIRQ0CCyAAIAg2AgQgACACNgIAIAJBFGwhDSACIQYDQCAGRSAHIA1GckUEQCAHIAhqIgUCfwJAAkACQAJAIAEgB2oiAy0AAEEBaw4DAQIDAAsgBEEIaiADQQRqKAIAIANBCGooAgAQ8gQgBCgCDCEJIAQoAgghCiAEIANBDGooAgAgA0EQaigCABDyBCAEKAIEIQsgBCgCACEMQQAMAwsgA0ECai0AACEOIANBAWotAAAhD0EBDAILIANBEGooAgAhCyADQQxqKAIAIQwgA0EIaigCACEJIANBBGooAgAhCkECDAELIANBEGooAgAhCyADQQxqKAIAIQwgA0EIaigCACEJIANBBGooAgAhCkEDCzoAACAFQRBqIAs2AgAgBUEMaiAMNgIAIAVBCGogCTYCACAFQQRqIAo2AgAgBUECaiAOOgAAIAVBAWogDzoAACAGQQFrIQYgB0EUaiEHDAELCyAAIAI2AgggBEEQaiQADwsQxgUACwAL9AMCBn8BfiMAQfAAayIEJAAgACkDACEKIAFBtOfBABDPByEBIAQgAzcDMCAEIAI2AiggBCAANgIgIAQgATYCGCAEIAo3AxAgBEE4aiIGIARBEGoQowMgBCgCIBCPBCAEQdAAaiIBKAIAIQcgBCgCTCEAIAQoAkghBSAEKAJAEIsIIAYgBUHwAGogAhCVAwJAIAQtADgEQCAELQA5IQIMAQtBAiECIAEpAwBCgICAAoNQDQAgBEEIaiAAQThqKAIAIABBPGooAgAgBCkDQCIKIARByABqKAIAIghBkIjBABClBxCoBEEIIQIgBCgCCCIBQQhqIQUg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GGogAjYCACADIAo3AwggAUECayEEIABByABqIQIgAUEFdCAAakEgayEAA0ACQCAEBEAgAkEEaygCACACKAIAIAYgBxCpBkH/AXFB/wFGDQEgAkEoayEACyAAIAY2AgQgACAHNgIIIAAgCDYCACAAIAMpAwg3AgwgAEEUaiADQRBqKQMANwIAIABBHGogA0EYaigCADYCAAwCCyACQShrIgEgAkEIayIFKQMANwMAIAFBGGogBUEYaikDADcDACABQRBqIAVBEGopAwA3AwAgAUEIaiAFQQhqKQMANwMAIARBAWshBCACQSBqIQIMAAsACyADQSBqJAAL7AIBA38CQCACIANHBEAgAyACayIFIABqIgYgBSAFIAZLGyEHIAAgA2shBSAEIAAgAmsiBk0EQCAEIAVLDQIgASADaiABIAJqIAQQlAkaDwsCQCAEIAdNBEAgBCAFSw0BIAEgA2ogASACaiAGEJQJGiABIAMgBmpqIAEgBCAGaxCUCRoPCyAEIAVNBEAgASADIAZqaiABIAQgBmsQlAkaIAEgA2ogASACaiAGEJQJGg8LIAEgBiAFayIHaiABIAQgBmsQlAkaIAEgASAAIAdraiAHEJQJIgAgA2ogACACaiAFEJQJGg8LIAEgA2ogASACaiAGEJQJGiABIAMgBmpqIAEgBSAGayIAEJQJGiABIAAgAWogBCAFaxCUCRoLDwsgBCAHTQRAIAEgA2ogASACaiAFEJQJGiABIAEgAiAFamogBCAFaxCUCRoPCyABIAEgAiAFamogBCAFaxCUCSIAIANqIAAgAmogBRCUCRoLzwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIEQRQQUCIARQ0EIABBEGpBzMrAACgAADYAACAAQQhqQcTKwAApAAA3AAAgAEG8ysAAKQAANwAAIAJBFDYCECACIAA2AgwgAkEUNgIIIAJBNGpBAzYCACACQTxqQQI2AgAgAkEkakEZNgIAIAJBzMfAADYCMCACQQA2AiggAkEaNgIcIAFBBGooAgAhACACIAJBGGo2AjggAiACQQRqNgIgIAIgAkEIajYCGCABKAIAIAAgAkEoahDmBCEAIAIoAghFDQMgAigCDBB+DAMLIAAtAAEhACACQTRqQQE2AgAgAkE8akEBNgIAIAJB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AEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARBywAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAVBkPPBAEECQYTzwQBBARDUBSADQUBrIANBMGopAwA3AwAgAyADKQMoNwM4IAMgAjYCSCADIAEgBBDFBCADKQMAIQYgAygCCCEBIANBIGoQ1QcgA0EcahDVByAAIAE2AgggACAGNwMAIANB0ABqJAAL+QECA38BfiMAQdAAayIDJAAgASgCACEBIAMQRSIENgIcIANBEGogBEHMABC7BSADIAMoAhAgAygCFBD9BSIENgIgIANBIDYCJCADIAG4EEYiBTYCKCADIAK4EEYiAjYCOCAEQSAgBSACEEchAiADQThqIgQQ1QcgA0EoaiIFENUHIANBJGoQ1QcgBUHQ7cEAQQVBhPPBAEEBENQFIANBQGsgA0EwaikDADcDACADIAMpAyg3AzggAyACNgJIIAMgASAEEMUEIAMpAwAhBiADKAIIIQEgA0EgahDVByADQRxqENUHIAAgATYCCCAAIAY3AwAgA0HQAGokAAv5AQIDfwF+IwBB0ABrIgMkACABKAIAIQEgAxBFIgQ2AhwgA0EQaiAEQc0AELsFIAMgAygCECADKAIUEP0FIgQ2AiAgA0EgNgIkIAMgAbgQRiIFNgIoIAMgArgQRiICNgI4IARBICAFIAIQRyECIANBOGoiBBDVByADQShqIgUQ1QcgA0EkahDVByAFQaPzwQBBBEGE88EAQQEQ1AUgA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC/kBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARBzgAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAVB4O3BAEEHQYTzwQBBARDUBSADQUBrIANBMGopAwA3AwAgAyADKQMoNwM4IAMgAjYCSCADIAEgBBDFBCADKQMAIQYgAygCCCEBIANBIGoQ1QcgA0EcahDVByAAIAE2AgggACAGNwMAIANB0ABqJAAL+QECA38BfiMAQdAAayIDJAAgASgCACEBIAMQRSIENgIcIANBEGogBEHPABC7BSADIAMoAhAgAygCFBD9BSIENgIgIANBIDYCJCADIAG4EEYiBTYCKCADIAK4EEYiAjYCOCAEQSAgBSACEEchAiADQThqIgQQ1QcgA0EoaiIFENUHIANBJGoQ1QcgBUHQ7cEAQQVBhPPBAEEBENQFIANBQGsgA0EwaikDADcDACADIAMpAyg3AzggAyACNgJIIAMgASAEEMUEIAMpAwAhBiADKAIIIQEgA0EgahDVByADQRxqENUHIAAgATYCCCAAIAY3AwAgA0HQAGokAAv5AQIDfwF+IwBB0ABrIgMkACABKAIAIQEgAxBFIgQ2AhwgA0EQaiAEQdAAELsFIAMgAygCECADKAIUEP0FIgQ2AiAgA0EgNgIkIAMgAbgQRiIFNgIoIAMgArgQRiICNgI4IARBICAFIAIQRyECIANBOGoiBBDVByADQShqIgUQ1QcgA0EkahDVByAFQZDzwQBBAkGE88EAQQEQ1AUgA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC/kBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB0QAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAVB7u3BAEEJQYTzwQBBARDUBSADQUBrIANBMGopAwA3AwAgAyADKQMoNwM4IAMgAjYCSCADIAEgBBDFBCADKQMAIQYgAygCCCEBIANBIGoQ1QcgA0EcahDVByAAIAE2AgggACAGNwMAIANB0ABqJAAL+QECA38BfiMAQdAAayIDJAAgASgCACEBIAMQRSIENgIcIANBEGogBEHTABC7BSADIAMoAhAgAygCFBD9BSIENgIgIANBIDYCJCADIAG4EEYiBTYCKCADIAK4EEYiAjYCOCAEQSAgBSACEEchAiADQThqIgQQ1QcgA0EoaiIFENUHIANBJGoQ1QcgBUGQ88EAQQJBhPPBAEEBENQFIANBQGsgA0EwaikDADcDACADIAMpAyg3AzggAyACNgJIIAMgASAEEMUEIAMpAwAhBiADKAIIIQEgA0EgahDVByADQRxqENUHIAAgATYCCCAAIAY3AwAgA0HQAGokAAv5AQIDfwF+IwBB0ABrIgMkACABKAIAIQEgAxBFIgQ2AhwgA0EQaiAEQdQAELsFIAMgAygCECADKAIUEP0FIgQ2AiAgA0EgNgIkIAMgAbgQRiIFNgIoIAMgArgQRiICNgI4IARBICAFIAIQRyECIANBOGoiBBDVByADQShqIgUQ1QcgA0EkahDVByAFQZvzwQBBBEGE88EAQQEQ1AUgA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC/kBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB1QAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAVBhPPBAEEBQaiVwgBBABDUBSADQUBrIANBMGopAwA3AwAgAyADKQMoNwM4IAMgAjYCSCADIAEgBBDFBCADKQMAIQYgAygCCCEBIANBIGoQ1QcgA0EcahDVByAAIAE2AgggACAGNwMAIANB0ABqJAAL+QECA38BfiMAQdAAayIDJAAgASgCACEBIAMQRSIENgIcIANBEGogBEHWABC7BSADIAMoAhAgAygCFBD9BSIENgIgIANBIDYCJCADIAG4EEYiBTYCKCADIAK4EEYiAjYCOCAEQSAgBSACEEchAiADQThqIgQQ1QcgA0EoaiIFENUHIANBJGoQ1QcgBUGS88EAQQNBhPPBAEEBENQFIANBQGsgA0EwaikDADcDACADIAMpAyg3AzggAyACNgJIIAMgASAEEMUEIAMpAwAhBiADKAIIIQEgA0EgahDVByADQRxqENUHIAAgATYCCCAAIAY3AwAgA0HQAGokAAv5AQIDfwF+IwBB0ABrIgMkACABKAIAIQEgAxBFIgQ2AhwgA0EQaiAEQdcAELsFIAMgAygCECADKAIUEP0FIgQ2AiAgA0EgNgIkIAMgAbgQRiIFNgIoIAMgArgQRiICNgI4IARBICAFIAIQRyECIANBOGoiBBDVByADQShqIgUQ1QcgA0EkahDVByAFQdrtwQBBBkGE88EAQQEQ1AUgA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC/kBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB2AAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAVBpOjBAEECQYTzwQBBARDUBSADQUBrIANBMGopAwA3AwAgAyADKQMoNwM4IAMgAjYCSCADIAEgBBDFBCADKQMAIQYgAygCCCEBIANBIGoQ1QcgA0EcahDVByAAIAE2AgggACAGNwMAIANB0ABqJAAL+QECA38BfiMAQdAAayIDJAAgASgCACEBIAMQRSIENgIcIANBEGogBEHdABC7BSADIAMoAhAgAygCFBD9BSIENgIgIANBIDYCJCADIAG4EEYiBTYCKCADIAK4EEYiAjYCOCAEQSAgBSACEEchAiADQThqIgQQ1QcgA0EoaiIFENUHIANBJGoQ1QcgBUGolcIAQQBBhPPBAEEBENQFIANBQGsgA0EwaikDADcDACADIAMpAyg3AzggAyACNgJIIAMgASAEEMUEIAMpAwAhBiADKAIIIQEgA0EgahDVByADQRxqENUHIAAgATYCCCAAIAY3AwAgA0HQAGokAAv5AQIDfwF+IwBB0ABrIgMkACABKAIAIQEgAxBFIgQ2AhwgA0EQaiAEQd4AELsFIAMgAygCECADKAIUEP0FIgQ2AiAgA0EgNgIkIAMgAbgQRiIFNgIoIAMgArgQRiICNgI4IARBICAFIAIQRyECIANBOGoiBBDVByADQShqIgUQ1QcgA0EkahDVByAFQZvzwQBBBEGE88EAQQEQ1AUgA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC/kBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB3wAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAVB0O3BAEEFQYTzwQBBARDUBSADQUBrIANBMGopAwA3AwAgAyADKQMoNwM4IAMgAjYCSCADIAEgBBDFBCADKQMAIQYgAygCCCEBIANBIGoQ1QcgA0EcahDVByAAIAE2AgggACAGNwMAIANB0ABqJAAL+QECA38BfiMAQdAAayIDJAAgASgCACEBIAMQRSIENgIcIANBEGogBEHiABC7BSADIAMoAhAgAygCFBD9BSIENgIgIANBIDYCJCADIAG4EEYiBTYCKCADIAK4EEYiAjYCOCAEQSAgBSACEEchAiADQThqIgQQ1QcgA0EoaiIFENUHIANBJGoQ1QcgBUGQ88EAQQJBhPPBAEEBENQFIANBQGsgA0EwaikDADcDACADIAMpAyg3AzggAyACNgJIIAMgASAEEMUEIAMpAwAhBiADKAIIIQEgA0EgahDVByADQRxqENUHIAAgATYCCCAAIAY3AwAgA0HQAGokAAv5AQIDfwF+IwBB0ABrIgMkACABKAIAIQEgAxBFIgQ2AhwgA0EQaiAEQeQAELsFIAMgAygCECADKAIUEP0FIgQ2AiAgA0EgNgIkIAMgAbgQRiIFNgIoIAMgArgQRiICNgI4IARBICAFIAIQRyECIANBOGoiBBDVByADQShqIgUQ1QcgA0EkahDVByAFQZjzwQBBA0GE88EAQQEQ1AUgA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC/kBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB5gAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAVB2u3BAEEGQYTzwQBBARDUBSADQUBrIANBMGopAwA3AwAgAyADKQMoNwM4IAMgAjYCSCADIAEgBBDFBCADKQMAIQYgAygCCCEBIANBIGoQ1QcgA0EcahDVByAAIAE2AgggACAGNwMAIANB0ABqJAAL+QECA38BfiMAQdAAayIDJAAgASgCACEBIAMQRSIENgIcIANBEGogBEHoABC7BSADIAMoAhAgAygCFBD9BSIENgIgIANBIDYCJCADIAG4EEYiBTYCKCADIAK4EEYiAjYCOCAEQSAgBSACEEchAiADQThqIgQQ1QcgA0EoaiIFENUHIANBJGoQ1QcgBUGS88EAQQNBhPPBAEEBENQFIANBQGsgA0EwaikDADcDACADIAMpAyg3AzggAyACNgJIIAMgASAEEMUEIAMpAwAhBiADKAIIIQEgA0EgahDVByADQRxqENUHIAAgATYCCCAAIAY3AwAgA0HQAGokAAv5AQIDfwF+IwBB0ABrIgMkACABKAIAIQEgAxBFIgQ2AhwgA0EQaiAEQekAELsFIAMgAygCECADKAIUEP0FIgQ2AiAgA0EgNgIkIAMgAbgQRiIFNgIoIAMgArgQRiICNgI4IARBICAFIAIQRyECIANBOGoiBBDVByADQShqIgUQ1QcgA0EkahDVByAFQZDzwQBBAkGE88EAQQEQ1AUgA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC/kBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB6gAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAVB5+3BAEEHQYTzwQBBARDUBSADQUBrIANBMGopAwA3AwAgAyADKQMoNwM4IAMgAjYCSCADIAEgBBDFBCADKQMAIQYgAygCCCEBIANBIGoQ1QcgA0EcahDVByAAIAE2AgggACAGNwMAIANB0ABqJAAL+QECA38BfiMAQdAAayIDJAAgASgCACEBIAMQRSIENgIcIANBEGogBEHrABC7BSADIAMoAhAgAygCFBD9BSIENgIgIANBIDYCJCADIAG4EEYiBTYCKCADIAK4EEYiAjYCOCAEQSAgBSACEEchAiADQThqIgQQ1QcgA0EoaiIFENUHIANBJGoQ1QcgBUGj88EAQQRBhPPBAEEBENQFIANBQGsgA0EwaikDADcDACADIAMpAyg3AzggAyACNgJIIAMgASAEEMUEIAMpAwAhBiADKAIIIQEgA0EgahDVByADQRxqENUHIAAgATYCCCAAIAY3AwAgA0HQAGokAAv5AQIDfwF+IwBB0ABrIgMkACABKAIAIQEgAxBFIgQ2AhwgA0EQaiAEQe4AELsFIAMgAygCECADKAIUEP0FIgQ2AiAgA0EgNgIkIAMgAbgQRiIFNgIoIAMgArgQRiICNgI4IARBICAFIAIQRyECIANBOGoiBBDVByADQShqIgUQ1QcgA0EkahDVByAFQZDzwQBBAkGE88EAQQEQ1AUgA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC/kBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB8AAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAVB2u3BAEEGQYTzwQBBARDUBSADQUBrIANBMGopAwA3AwAgAyADKQMoNwM4IAMgAjYCSCADIAEgBBDFBCADKQMAIQYgAygCCCEBIANBIGoQ1QcgA0EcahDVByAAIAE2AgggACAGNwMAIANB0ABqJAAL+QECA38BfiMAQdAAayIDJAAgASgCACEBIAMQRSIENgIc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KDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC+sBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB3AAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAUQwgggA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC+sBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB4AAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAUQwwggA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC+sBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB4QAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAUQwgggA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC+sBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB4wAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAUQxAggA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC+sBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB5QAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAUQxAggA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC+sBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB5wAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAUQwgggA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC+sBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB7AAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAUQwwggA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC+sBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB7wAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAUQxAggA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC+sBAgN/AX4jAEHQAGsiAyQAIAEoAgAhASADEEUiBDYCHCADQRBqIARB8wAQuwUgAyADKAIQIAMoAhQQ/QUiBDYCICADQSA2AiQgAyABuBBGIgU2AiggAyACuBBGIgI2AjggBEEgIAUgAhBHIQIgA0E4aiIEENUHIANBKGoiBRDVByADQSRqENUHIAUQwgggA0FAayADQTBqKQMANwMAIAMgAykDKDcDOCADIAI2AkggAyABIAQQxQQgAykDACEGIAMoAgghASADQSBqENUHIANBHGoQ1QcgACABNgIIIAAgBjcDACADQdAAaiQAC+kBAQV/IwBBIGsiASQAIAFBCGogABD6BAJAIAEoAghFBEAgAUEQai0AACEFIAEoAgwiA0EMaigCAEEMbCEEIANBCGooAgBBCGohAgNAIARFDQIgAigCAEECIAIQzQRBBEYEQCACKAIAQRRqKAIAEIcJCyAEQQxrIQQgAkEMaiECDAALAAsgASABKAIMNgIYIAEgAUEQai0AADoAHEGw+8EAQSsgAUEYakGAu8EAQZC7wQAQ6QMACyADQQRqEJ0CQQAhAiAAIAMoAgwEfyACBSADQRhqKAIARQs6ABwgAyAFENwGIAFBIGokAAvmAQEFfyMAQRBrIgIkACABKAIAIQMCQAJAIAFBKGooAgBBAkYEQCADDQEgAEKAgICAEDcCACAAQQhqQQA2AgAMAgsgAUEQaiEEIANFBEAgACAEENgCDAILIAIgBBDYAiACKAIAIQMgAigCBCEEIABBCGogAkEIaigCACIFIAFBCGooAgAgASgCBGsiAWoiBjYCACAAIARBAUYgBSAGTXE2AgQgAEF/IAEgA2oiACAAIANJGzYCAAwBCyAAQQE2AgQgAEEIaiABQQhqKAIAIAEoAgRrIgE2AgAgACABNgIACyACQRBqJAAL3wEBBn8jAEEgayIBJABBgYCAgHghBAJAIAAoAhAiBSAAQRhqKAIAIgJrIAAoAgQgACgCCGogAmsiA08NACACIAIgA2oiA0sEQEEAIQQgAyECDAELIANBKGwhAiADQbTmzBlJQQN0IQYCQCAFBEAgAUEINgIYIAEgBUEobDYCFCABIABBFGooAgA2AhAMAQsgAUEANgIYCyABIAIgBiABQRBqEOACIAEoAgQhAiABKAIABEAgAUEIaigCACEEDAELIAAgAzYCECAAQRRqIAI2AgALIAIgBBCpByABQSBqJAAL2QEBBX8jAEEgayIGJAAgBkEQaiIEIAEoAgBBCGoQ5gggBkEIaiAEQYS0wQAQ4AQgBi0ADCEHIAYoAggiAUEEaiADEP8CAkAgAyABKAIEIgQgAUEQaigCACIIIAFBDGooAgBqIgUgBEEAIAQgBU0bayIFayIESwRAIAUgAUEIaigCACIFaiACIAQQkgkaIAUgAiAEaiADIARrEJIJGgwBCyABQQhqKAIAIAVqIAIgAxCSCRoLIAEgAyAIajYCECAAQQQ6AAAgACADNgIEIAEgBxD5ByAGQSBqJAAL+AEBAn8jAEHQAGsiAyQAIANBADYCCCADQoCAgIAQNwMAIANBEGogASADIAIoAjwRAwACQCADLQAQQQRGBEAgACADKQMANwIAIABBCGogA0EIaigCADYCAAwBCyADIAMpAxA3AxggA0E8akECNgIAIANBxABqQQE2AgAgA0G0w8EANgI4IANBADYCMCADQTM2AkwgAyADQcgAajYCQCADIANBGGoiBDYCSCADQSBqIANBMGoQzAMgAygCJCIBIAMoAigQOCECIAMoAiAgARCGCCAEEOwFIABBADYCBCAAIAI2AgAgAygCACADKAIEEIYICyADQdAAaiQAC+MBAQV/IwBBEGsiAiQAIAEoAgAhAwJAAkAgASgCEEECRgRAIAMNASAAQoCAgIAQNwIAIABBCGpBADYCAAwCCyABQRBqIQQgA0UEQCAAIAQQ0wIMAgsgAiAEENMCIAIoAgAhAyACKAIEIQQgAEEIaiACQQhqKAIAIgUgAUEIaigCACABKAIEayIBaiIGNgIAIAAgBEEBRiAFIAZNcTYCBCAAQX8gASADaiIAIAAgA0kbNgIADAELIABBATYCBCAAQQhqIAFBCGooAgAgASgCBGsiATYCACAAIAE2AgALIAJBEGokAAviAQEF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QQE6AAFBAQwCCyADBEAgAkEIaigCACIBIAEoAgBBAWs2AgALIABBgQg7AQAMAgsgACABQcwAaigCACABKAJAazYCBEEACzoAACAEIAQoAgBBAWs2AgALIAJBEGokAAvbAQIBfwF8IwBBMGsiAyQAIAMgARC1ByACEJUEKAIQEBYiATYCJCADQaC+wQBBChAHIgI2AiwgA0EYaiABIAIQvAUgAyADKAIYIAMoAhwQ8wUiAjYCKCADQQhqIAIQhwYgAysDECEEIAMpAwgQ4QcgA0EoahDVByADQSxqENUHIAEQFyEBIANBJGoQ1QcgACABNgIIIABCfwJ+IAREAAAAAAAAAABmIgAgBEQAAAAAAADwQ2NxBEAgBLEMAQtCAAtCACAAGyAERP///////+9DZBs3AwAgA0EwaiQAC9EBAQR/IwBBQGoiAyQAIAMgARD4BSADKAIEIQVBACEBIAMoAgAiBCgCACACIAQoAgQoAogBEREAQf8BcSIEQRlHBEAgAyAEOgAPIANBLGpBAjYCACADQTRqQQE2AgAgA0GQw8EANgIoIANBADYCICADQTI2AjwgAyADQThqNgIwIAMgA0EPajYCOCADQRBqIANBIGoQzAMgAygCFCIEIAMoAhgQOCEGIAMoAhAgBBCGCEEBIQELIAVBADYCACAAIAE2AgQgACAGNgIAIANBQGskAAvSAQIDfwF+IwBBMGsiAyQAIANBCGogASACEIUDIAMoAhAhAiADKQMIIQYgASgCbCIEQYACaigCACIBKAIIIQUgAUF/NgIIAkAgBUUEQCADQRhqIAFBCGoQhAUgAygCGA0BIAMoAhwhASAAQRhqIANBIGotAAA6AAAgACABNgIUIAAgBEEIajYCECAAIAI2AgggACAGNwMAIANBMGokAA8LAAsgAyADKAIcNgIoIAMgA0Egai0AADoALEGw+8EAQSsgA0EoakGwrMEAQcSuwQAQ6QMAC9cBAQN/IwBBEGsiAiQAIAJBCGogARD7BSACKAIMIQMgAiACKAIIIgEgASgCeBCxAygCbCIBQdgBaigCACABQdwBaigCACgCGBEAAAJAIAACfyACKAIAIgEgAigCBCgCDBEHAELG5ezG+63msqd/UiABRXJFBEAgASgCACIEIAQoAgAiAUEBajYCACABQQBIDQJBACEBIANBADYCACAEEOkH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AyACIAFBDGooAgAgAUEQaigCABDyBCAAQQxqIAIpAwA3AgAgACADNwIEQQAMAwsgACABLwABOwABQQEMAgsgACABKQIENwIEIABBDGogAUEMaikCADcCAEECDAELIAAgASkCBDcCBCAAQQxqIAFBDGopAgA3AgBBAws6AAAgAkEQaiQAC8oBAQV/IwBBIGsiAiQAAkAgACgCBCIDRQRAIAFBqJXCAEEAEFchAwwBCyAAKAIAIQAgAiADNgIMIAIgADYCCCACQRBqIAJBCGoQqAEgAigCECIABEAgASgCBCEEIAEoAgAhBQNAIAIoAhQhBiACKAIcRQRAIAEgACAGEFchAwwDC0EBIQMgBSAAIAYgBCgCDBEEAA0CIAVB/f8DIAQoAhARAgANAiACQRBqIAJBCGoQqAEgAigCECIADQALC0EAIQMLIAJBIGokACADC88BAQJ/IwBBEGsiBSQAIAEhBAJAAkACQAJAAkACQCACp0EBaw4CAAECCyABQQxqIQQLIAQ1AgAgA3wiA0IAWQ0BIAVBCGpBFEG888AAQRkQiwUgAEEBNgIAIAAgBSkDCDcCBAwDCyADQgBTDQELIANC/////w9WBEAgAEEBNgIAIABCgSg3AgQMAgsgAEEANgIAIAEgAUEMaigCACIBIAOnIgQgASAESRsiATYCACAAIAGtNwMIDAELIABBATYCACAAQoEoNwIECyAFQRBqJAALuwEBBX8jAEEgayICJABBgYCAgHghBAJAIAAoAgAiBSAAKAIIIgZrIAFPDQAgBiABIAZqIgNLBEBBACEEIAMhAQwBCyADQX9zQR92IQECQCAFBEAgAkEBNgIYIAIgBTYCFCACIAAoAgQ2AhAMAQsgAkEANgIYCyACIAMgASACQRBqEOACIAIoAgQhASACKAIABEAgAkEIaigCACEEDAELIAAgAzYCACAAIAE2AgQLIAEgBBCpByACQSBqJAALvAEBAX8jAEEgayIDJAAgAyACNgIMIANBEGoiAiABQTBqEOMGIAMgAkHIlsEAEMAFIAMoAgQhASAAAn8gAygCACADQQxqEJsDIgIEQCAAQTBqIAIoAig2AgAgAEEoaiACKQMgNwMAIABBIGogAikDGDcDACAAQRhqIAIpAxA3AwAgAEEQaiACKAIINgIAIAAgAikDADcDCEEADAELIABBCDoAAUEB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ADYCBCAAQQI2AgAMAQsgACADKQMINwIADAELIANBCGoQ9QcLIANBMGokAAujAQEBfyMAQTBrIgMkACADQQQ6AAggAyABNgIQIANBKGogAkEQaikCADcDACADQSBqIAJBCGopAgA3AwAgAyACKQIANwMYAkACQCADQQhqQbCiwQAgA0EYahCTAUUEQCAAQQQ6AAAMAQsgAy0ACEEERgRAIABBuO/BADYCBCAAQQI2AgAMAQsgACADKQMINwIADAELIANBCGoQ9QcLIANBMGokAAujAQEBfyMAQTBrIgMkACADQQQ6AAggAyABNgIQIANBKGogAkEQaikCADcDACADQSBqIAJBCGopAgA3AwAgAyACKQIANwMYAkACQCADQQhqQciiwQAgA0EYahCTAUUEQCAAQQQ6AAAMAQsgAy0ACEEERgRAIABBuO/BADYCBCAAQQI2AgAMAQsgACADKQMINwIADAELIANBCGoQ9QcLIANBMGokAAuoAQICfwF+IwBBIGsiAyQAIAIoAgghBCADQQhqIAEgAhC7ASAEIAIoAggiAU0EQCADQRBqIAIoAgQgBGogASAEaxB8IAMpAwghBQJAIAMoAhBFBEAgACAFNwIADAELAkAgBUL/AYNCBFEEQCAAQfDbwQA2AgQgAEECNgIADAELIAAgBTcCAAsgBCEBCyACIAE2AgggA0EgaiQADwsgBCABQbzbwQAQyQgAC6MBAQF/IwBBMGsiAyQAIANBBDoACCADIAE2AhAgA0EoaiACQRBqKQIANwMAIANBIGogAkEIaikCADcDACADIAIpAgA3AxgCQAJAIANBCGpBkO/BACADQRhqEJMBRQRAIABBBDoAAAwBCyADLQAIQQRGBEAgAEG478EANgIEIABBAjYCAAwBCyAAIAMpAwg3AgAMAQsgA0EIahD1BwsgA0EwaiQAC6UBAQR/IwBB8ABrIggkACABIAEoAnwiCUEBajYCfCAIQQhqIgogAUEwahDICCAIIApB7JfBABDYBCAILQAEIQsgCCgCACEBIAggBDsBaCAIIAM3A1ggCCACNwNQIAggBTsBaiAIQgA3A2AgCCAHNgJIIAggBjcDQCAKIAFBCGogCSAIQUBrEOQGIAEgCxCHCCAAQQA6AAAgACAJNgIEIAhB8ABqJAALnQECAX8BfiMAQSBrIgIkACAAKQMAIQMgAUGk58EAEM8HIQEgAiAANgIYIAIgATYCECACIAM3AwggAiACQQhqEKMDEPQEAkBCAiACNQIAIgMgAjUCBEIghoQgA0ICURsiA6ciAUECRwRAQQgQUCIARQ0BIAAgATYCACAAIANCIIg+AgQgABCoCAALIAJBIGokACADQiCIp0H/AXEPCwALrgECA38BfiMAQRBrIgIkACABKQMIIgVCgICAgBBUBEAgAiAFpyIDQQAQkQQgAigCACEEIAJBCGogASgCECABKQMAIAIoAgQiASADEKMEAkAgAigCCARAIAAgAzYCCCAAIAE2AgQgACAENgIADAELIAItAAwhAyAAQQA2AgQgACADOgAAIAQgARCGCAsgAkEQaiQADwtBnrbBAEEZIAJBCGpBvI/AAEG4tsEAEOkDAAuWAQEDfyMAQYABayIDJAAgAC0AACECQQAhAANAIAAgA2pB/wBqQTBBNyACQQ9xIgRBCkkbIARqOgAAIABBAWshACACIgRBBHYhAiAEQQ9LDQALIABBgAFqIgJBgQFPBEAgAkGAAUGUoMAAEMkIAAsgAUEBQZCUwgBBAiAAIANqQYABakEAIABrEIsBIQAgA0GAAWokACAAC5sBAQJ/IwBBIGsiAiQAIAFBFGooAgAhAwJAAkAgAAJ/AkACQCABQQxqKAIADgIAAQMLIAMNAkEAIQNBqJXCAAwBCyADDQEgASgCCCIBKAIEIQMgASgCAAsgAxCmBQwBCyACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCAAIAJBCGoQrQELIAJBIGokAAubAQECfyMAQSBrIgIkACABQRRqKAIAIQMCQAJAIAACfwJAAkAgAUEMaigCAA4CAAEDCyADDQJBACEDQaiVwgAMAQsgAw0BIAEoAggiASgCBCEDIAEoAgALIAMQmwQMAQsgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggACACQQhqEK0BCyACQSBqJAALsgEBAn8jAEEQayICJAACfwJAAkACQCAAKAIAIgAtABQiA0EDa0EAIANBA0sbQQFrDgIBAgALIAIgADYCCCACIABBFGo2AgwgAUG45cAAQRAgAkEIakGo5cAAIAJBDGpBqOXAABCCAwwCCyACIAA2AgwgAUGb5cAAQQ0g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KAIAIAJBFGxqIgAgASkCADcCACAAQQhqIAFBCGopAgA3AgAgAEEQaiABQRBqKAIANgIAIAMLdwECfyAAQRxqKAIAIgJBAWoQ6wchAyAAIAAoAhQgAkcEfyADBSAAQRRqIAIQgAMgACgCHCICQQFqCzYCHCAAQRhqKAIAIAJBFGxqIgAgASkCADcCACAAQQhqIAFBCGopAgA3AgAgAEEQaiABQRBqKAIANgIAIAMLdwECfyAAQRBqKAIAIgJBAWoQ6wchAyAAIAAoAgggAkcEfyADBSAAQQhqIAIQgAMgACgCECICQQFqCzYCECAAQQxqKAIAIAJBFGxqIgAgASkCADcCACAAQQhqIAFBCGopAgA3AgAgAEEQaiABQRBqKAIANgIAIAMLiQEBBH8jAEEQayICJAAgAiABQQRqELkFAkACQCACKAIARQRAIABBBjYCAAwBCyACKAIEIQQgASABKAIAIgNBAWo2AgAgAiAENgIMIAEoAhAiASgCBCIFIANNDQEgACABKAIAIANqIAQQwwEgAkEMahDVBwsgAkEQaiQADwsgAyAFQdzlwQAQ/wMAC4EBAQN/IwBBIGsiBCQAIARBGGogARD7BSAEKAIcIQUgBCgCGCEBIARBEGogAiADENIFIARBCGogASAEKAIQIgIgBCgCFCIDEJkDIAQoAgwhBiAEKAIIIQEgAwRAIAIQfgsgBUEANgIAIAAgATYCBCAAIAZBACABGzYCACAEQSBqJAALowEBAX8jAEHQAGsiAyQAIANBQGtCADcDACADQgA3AzggAyABNwMwIAMgAULzytHLp4zZsvQAhTcDICADIAFC7d6R85bM3LfkAIU3AxggAyAANwMoIAMgAELh5JXz1uzZvOwAhTcDECADIABC9crNg9es27fzAIU3AwggAyACNgJMIANBCGoiAiADQcwAakEEEJkCIAIQ5wEhACADQdAAaiQAIAALgAECA38BfiMAQRBrIgQkACAEQQhqIAEgAmsiA0EAEJEEIAQpAwghBiAAQQA2AgggACAGNwIAIAAgAxCkByAAKAIIIQMgACgCBCEFA0AgASACRwRAIAMgBWogAi0AADoAACADQQFqIQMgAkEBaiECDAELCyAAIAM2AgggBEEQaiQAC4YBAQF/IwBBgANrIgEkACAAEJsIIAEgABDoBiABKAIEQQA2AgAgAUHAAWogAEHAARCSCRogAUEIaiABQcgBakG4ARCSCRogABB+IAFBgAFqEMYBIAFBhAFqEPkGIAFBiAFqEPkGIAFBjAFqEPkGIAFBkAFqEOwHIAFBGGoQtAQgAUGAA2okAAt3AQF/IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0EUakECNgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0GcnsAANgIQIANBADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEIEGAAt3AQF/IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0EUakEDNgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0HwksAANgIQIANBADYCCCADQQE2AiQgAyADQSBqNgIYIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEIEGAAt3AQF/IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0EUakEDNgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0HQpMAANgIQIANBADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEIEGAAt9AgF/AX4jAEEQayIDJAAgA0EIaiAAKAIIIAEgAhD4BCADLQAIIgJBBEcEQCADKQMIIQQgAC0AAEEDRgRAIAAoAgQiASgCACABKAIEKAIAEQEAIAEoAgQoAgQEQCABKAIAEH4LIAEQfgsgACAENwIACyADQRBqJAAgAkEERwuKAQEEfyMAQRBrIgEkAAJ/QYSdwgAoAgAiAARAQYidwgBBACAAGwwBCxDXBSEDQYSdwgAoAgAhAEGEncIAQQE2AgBBiJ3CACgCACECQYidwgAgAzYCACABIAI2AgwgASAANgIIIABFIAJFckUEQCABQQhqQQRyEPgGC0GIncIACyEAIAFBEGokACAAC4IBAQR/IAEoAgAiAiABKAIIIgNLBEAgAkEYbCECIAEoAgQhBAJ/AkAgA0UEQCAEIAIQpAhBCCECDAELQQggBCACQQggA0EYbCIFEHYiAkUNARoLIAEgAzYCACABIAI2AgRBgYCAgHgLIQIgBSACEKkHCyAAIAM2AgQgACABKAIENgIAC38BA38jAEEgayIEJAAgBEEYaiABEPsFIAQoAhwhBSAEKAIYIQEgBEEQaiACIAMQ0gUgBEEIaiABIAQoAhAiAiAEKAIUIgMQmQMgBCgCDCEGIAQoAgghASADIAIQhgggBUEANgIAIAAgATYCBCAAIAZBACABGzYCACAEQSBqJAALdgEBf0EYIQQCQCABIAJNDQAgACACQdAAbGoiACgCAEEBRw0AIABBHGooAgAiBCAAKAIURgRAIABBFGogBBD8AiAAKAIcIQQLIABBGGooAgAgBEECdGogAzYCACAAQgA3AzAgACAAKAIcQQFqNgIcQRkhBAsgBAvGAQEFfyAAKAIEIQEgAEGolcIANgIEIAAoAgAhAiAAQaiVwgA2AgACQCABIAJGDQAgAiABa0EMbkEMbCECIAAoAhAoAgQiAyABIANrQQxuQQxsaiEBA0AgAkUNASABQQhqEPgGIAJBDGshAiABQQxqIQEMAAsACyAAKAIMIgEEQCAAKAIIIgQgACgCECICKAIIIgNHBEAgAigCBCIFIANBDGxqIAUgBEEMbGogAUEMbBCUCRogACgCDCEBCyACIAEgA2o2AggLC9YBAgF/An4jAEEgayIDJAAgACkDCCEEIAMgAq0iBTcDACAEIAVRBEAgACgCECAAKQMAIAEgAhCgAyEAIANBIGokACAADwsgA0EANgIcIANBqJXCADYCGCADQQE2AhQgA0G4kMAANgIQIANBADYCCCMAQSBrIgEkACABIABBCGo2AgQgASADNgIAIAFBGGogA0EIaiIAQRBqKQIANwMAIAFBEGogAEEIaikCADcDACABIAApAgA3AwggAUGg4MEAIAFBBGpBoODBACABQQhqQcCQwAAQ0gEAC3QBAX9BDBBQIgYEQCAGQQI2AgggBiADNgIAIAYgBCADayAFajYCBCABIAYgASgCACIBIAEgAkYiAhs2AgAgAgRAIABBhJTAADYCDCAAIAY2AgggACAFNgIEIAAgBDYCAA8LIAAgASAEIAUQ2gUgBhB+DwsAC3oBAn8jAEEgayICJAAgAkEIaiABECsCQCACKAIIIgMEQCACKAIMIQEgAiADNgIUIAIgATYCGCACIAE2AhAgAiACQRBqEPYEIAIoAgAhASAAIAIoAgQiAzYCCCAAIAE2AgQgACADNgIADAELIABBADYCBAsgAkEgaiQAC3cCAn8BfiMAQSBrIgMkACADQRhqIgQgAUEIaigCADYCACADIAEpAgA3AxAgA0EIaiADQRBqIgEQnQUgAykDCCEFIAQgAkEIaigCADYCACADIAIpAgA3AxAgAyABEJ0FIAAgAykDADcCCCAAIAU3AgAgA0EgaiQAC3QBAn8gAqchA0EIIQQDfyABIAAgA3EiA2opAABCgIGChIiQoMCAf4MiAlAEfyADIARqIQMgBEEIaiEEDAEFIAEgAnqnQQN2IANqIABxIgRqLAAAQQBOBH8gASkDAEKAgYKEiJCgwIB/g3qnQQN2BSAECwsLC2oBAX8jAEEwayICJAAgAkEoaiABQRhqKAIANgIAIAJBIGogAUEQaikCADcDACACQRhqIAFBCGopAgA3AwAgAiABKQIANwMQIAJBCGogAkEQahDxBCAAIAIoAgggAigCDBDnAiACQTBqJAALbQECfyMAQSBrIgIkAAJ/IAEoAgQEQCACQRhqIAFBCGooAgA2AgAgAiABKQIANwMQIAJBCGogAkEQahCdBSAAIAIpAwg3AgBBAAwBC0EBIQMgASgCAAshASAAIAM2AgwgACABNgIIIAJBIGokAAt3AgJ/AX4jAEEwayIDJAAgA0EQaiABIAIQhQMgAykDECEFIAMoAhghAiADQSBqIgQgASgCbCIBQYACaigCAEEIahDQBSADQQhqIAQQwgUgACADKQMINwIUIAAgAUEIajYCECAAIAI2AgggACAFNwMAIANBMGokAAuaAQEBfwJAAkACQAJAIABBAWsOAwECAwALIAEgAkEwaigCACACQTRqKAIAEOUGQRBqDwsgASACQRhqKAIAIAJBHGooAgAQ5QZBEGoPCyABIAJBDGooAgAgAkEQaigCABDlBkEQag8LIAJBJGooAgAhAyABQQFrIgAgAkEoaigCACIBTwRAIAAgAUHc2MEAEP8DAAsgAEEDdCADagtuAQF/IwBBEGsiAyQAAkAgAUUEQEEBIQIMAQsgAUEATgRAAn8gAkUEQCADQQhqIAFBARDtBSADKAIIDAELIAMgAUEBQQEQ2QYgAygCAAsiAg0BAAsQxgUACyAAIAI2AgQgACABNgIAIANBEGokAAtyAQV/IAAoAgghAiAAKAIEIQEgACgCACEDA0ACQCABIANGBEBBACEBDAELIAAgAUEEaiIENgIEIAEoAgAiBSACKAIAIgFBEGooAgBJBEAgAUEMaigCACAFQdAAbGoiASgCAEECRw0BCyAEIQEMAQsLIAELbAEFfyAAKAIAIgMoAkBBfnEhBCADKAIAQX5xIQIgAygCBCEBA0AgAiAERgRAIAEEQCABEH4LIANBhAFqEL0IIAAoAgAQfgUgAkE+cUE+RgRAIAEoAgAhBSABEH4gBSEBCyACQQJqIQIMAQsLC3wBA38jAEEgayICJAACf0EBIAAoAgAgARD1AQ0AGiABKAIEIQMgASgCACEEIAJBADYCHCACQaiVwgA2AhggAkEBNgIUIAJB1J3AADYCECACQQA2AghBASAEIAMgAkEIahCTAQ0AGiAAKAIEIAEQ9QELIQAgAkEgaiQAIAALegEBfyMAQSBrIgIkACAAKQMAIAEpAwBRBEAgACgCCCABQQxqKAIAIAFBEGooAgAQ5QYhACACQSBqJAAgAA8LIAJBADYCHCACQaiVwgA2AhggAkEBNgIUIAJB1NfBADYCECACQQA2AgggACABIAJBCGpBvNjBABCyBAALawEDfyAAKAIIQQxsIQIgACgCBEEIaiEBA0AgAgRAIAEoAgAiAyADKAIAIgNBAWs2AgAgA0EBRgRAIAEoAgAQkAULIAJBDGshAiABQQxqIQEMAQsLIAAoAgAiAQRAIAAoAgQgAUEMbBCkCAsLegEBfyMAQSBrIgIkACAAKQMAIAEpAwBRBEAgACgCCCABQTBqKAIAIAFBNGooAgAQ5QYhACACQSBqJAAgAA8LIAJBADYCHCACQaiVwgA2AhggAkEBNgIUIAJB1NfBADYCECACQQA2AgggACABIAJBCGpBvNjBABCyBAALcQECfyMAQSBrIgIkACABLQAAIQMgAUEBOgAAIAIgA0EBcSIDOgAHIAMEQCACQQA2AhwgAkGolcIANgIYIAJBATYCFCACQfTdwQA2AhAgAkEANgIIIAJBB2ogAkEIahCuBAALIAAgARCOBSACQSBqJAALogEBA38jAEHQAGsiBSQAIAVBCGohBgJAIAJFBEBBASEHDAELIAJBAE4EQCACEFAiBw0BAAsQxgUACyAGIAc2AgQgBiACNgIAIAUgBSgCDCIGNgIsIAUgBSgCCDYCKCAGIAEgAhCSCRogBSACNgIwIAVByABqIAQ2AgAgBSADNwNAIAVCADcDOCAFQRBqIAAgBUEoaiAFQThqEHUgBUHQAGokAAtyAQF/IAAtAAQhASAALQAFBEAgAAJ/QQEgAUH/AXENABogACgCACIBLQAYQQRxRQRAIAEoAgBB75/AAEECIAEoAgQoAgwRBAAMAQsgASgCAEHhn8AAQQEgASgCBCgCDBEEAAsiAToABAsgAUH/AXFBAEcLbQECfyMAQRBrIgMkAAJAAkACQCACRQRAQQEhBAwBCyACQQBIDQEgA0EIaiACQQFBABCuBiADKAIIIgRFDQILIAAgBDYCBCAAIAI2AgAgBCABIAIQkgkaIAAgAjYCCCADQRBqJAAPCxDGBQALAAtmAQV+IAAgACkDGCIBQhCJIAEgACkDCHwiAYUiAiAAKQMQIgMgACkDAHwiBEIgiXwiBTcDACAAIAJCFYkgBYU3AxggACABIANCDYkgBIUiAnwiASACQhGJhTcDECAAIAFCIIk3AwgLaQEDfyMAQSBrIgMkACADIAAQGSIENgIAIAMgAjYCBCACIARGBEAQFSIEEBYiBRAXIQIgBRCLCCACIAAgARAYIAIQiwggBBCLCCADQSBqJAAPCyADQQA2AhAgAyADQQRqIANBCGoQqwQACzoBAn8jAEEQayIBJAAgAUEIakEwQQQQowcgASgCCCICRQRAAAsgACACNgIEIABBBDYCACABQRBqJAALcgEBfyMAQSBrIgIkACAAKAIAIQAgAkEMakECNgIAIAJBFGpBATYCACACQeDlwAA2AgggAkEANgIAIAJBATYCHCACIAA2AhggAUEEaigCACEAIAIgAkEYajYCECABKAIAIAAgAhDmBCEAIAJBIGokACAAC5EBAQF/IwBBQGoiBCQAIARBOGpCADcDACAEQgA3AzAgBCABNwMoIAQgAULzytHLp4zZsvQAhTcDGCAEIAFC7d6R85bM3LfkAIU3AxAgBCAANwMgIAQgAELh5JXz1uzZvOwAhTcDCCAEIABC9crNg9es27fzAIU3AwAgBCACIAMQrwYgBBDnASEAIARBQGskACAAC3gCAX8BfiMAQTBrIgckACAAKQMAIQggAUHk58EAEM8HIQEgByAGNgIoIAcgBTYCJCAHIAQ2AiAgByADNgIcIAcgAjYCGCAHIAA2AhAgByABNgIIIAcgCDcDACAHIAIgAyAEIAUgBhDbASEAIAdBMGokACAAQf8BcQtqAQF/IAEoAgAhAgJ/AkACQCABLQAURQRAIAINAQwCCyACRQ0BIAFBEGooAgAgAUEMaigCAGsMAgsgAUEQaigCACABQQxqKAIAawwBC0EACyEBIABBATYCBCAAIAE2AgAgAEEIaiABNgIAC2gBAX4gAiACIAStfCIFWARAIAEoAgAQGa0gBVoEQCABKAIAIAKnIAWnEPAIIgEgAyAEEJ0EIAEQiwggACAENgIEIAAgAzYCAA8LIABBADYCACAAQQA6AAQPCyAAQQA2AgAgAEEBOgAEC2wBAn8jAEEgayIBJAAgAC0AACECIABBAToAACABIAJBAXEiADoAByAARQRAIAFBIGokAA8LIAFBADYCHCABQaiVwgA2AhggAUEBNgIUIAFB9N3BADYCECABQQA2AgggAUEHaiABQQhqEK4EAAtTAQF/AkAgAUUEQEEIIQIMAQsCQCABQdWq1SpLDQAgAUEYbCICQQBIDQAgAiABQdaq1SpJQQN0ENQHIgINAQALEMYFAAsgACACNgIEIAAgATYCAAv8AwEBfyMAQTBrIgMkACADIAI2AgggAyABNgIEIANBqJXCADYCDCADIAA2AhAgAyAANgIUIAMgA0EIajYCKCADIANBEGo2AiQgAyADQQxqNgIgIAMgA0EEajYCHCADIANBFGo2AhgjAEEgayIAJAAgAEEYaiADQRhqIgFBEGooAgA2AgAgAEEQaiABQQhqKQIANwMAIAAgASkCADcDCCAAQQhqIgAoAAQhASAAKAAQIQAgASgCAEHY5sEAEM8HGiAAKAIAIQEjAEHQAGsiACQAIAFBHk8EQCAAIAE2AgwgAEEcakEBNgIAIABBJGpBATYCACAAQTxqQQI2AgAgAEHEAGpBATYCACAAQdSPwgA2AhggAEEANgIQIABBCTYCLCAAQcCSwgA2AjggAEEANgIwIABBGTYCTCAAIABBKGo2AiAgACAAQTBqNgIoIAAgAEHIAGo2AkAgACAAQQxqNgJIIABBEGpB0JLCABCBBgALIABB0ABqJAAjAEFAaiIAJAAgAEEUakEBNgIAIABBHGpBATYCACAAQTRqQQE2AgAgAEE8akEANgIAIABBzOPBADYCECAAQQA2AgggAEEJNgIkIABB+IvBADYCMCAAQaiVwgA2AjggAEEANgIoIAAgAEEgajYCGCAAIABBKGo2AiAgAEEIakGAjMEAEIEGAAuHAQEDfyMAQRBrIgIkAAJAIAEoAgAEQCAAQQhqQQI6AABBASEBDAELIAFBfzYCABCzByEDIAIgATYCBCACQQhqIgQgA0EBczoAACACIAEtAARBAEc2AgAgAigCACEBIAIoAgQhAyAAQQhqIAQtAAA6AAAgACADNgIECyAAIAE2AgAgAkEQaiQAC24BAn8jAEEQayICJAAgARC5ByACIAFBBGoQvAcgAi0AAUEBcSEDIAItAABBAXEEQCACIAM6AAwgAiABNgIIQbD7wQBBKyACQQhqQeiNwQBB6I7BABDpAwALIAAgAzoABCAAIAE2AgAgAkEQaiQAC3EBAX8gAEHwAGooAgAgAEH0AGooAgAQ0wcgAEEQahC5AyAAQcgAaigCACAAQdQAaigCABDdByAAQSRqKAIAIABBKGooAgAQhgggACgCYCAAQeQAaiIBKAIAKAIAEQEAIAEoAgAoAgQEQCAAKAJgEH4LC2EBAX8gAiABKAIIIgRJBEAgACABKAIEIAJBDGxqIgMpAgA3AgAgAEEIaiADQQhqKAIANgIAIAMgA0EMaiAEIAJBf3NqQQxsEJQJGiABIARBAWs2AggPCyACIAQgAxCABAALZAEBfyMAQSBrIgMkACADIAE2AgQgAyAANgIAIANBGGogAkEQaikCADcDACADQRBqIAJBCGopAgA3AwAgAyACKQIANwMIIANBxL/AACADQQRqQcS/wAAgA0EIakG0v8AAENIBAAthAQF/IwBBIGsiBCQAIAQgATYCBCAEIAA2AgAgBEEYaiACQRBqKQIANwMAIARBEGogAkEIaikCADcDACAEIAIpAgA3AwggBEGUwMAAIARBBGpBlMDAACAEQQhqIAMQ0gEAC2cBAX8jAEEgayICJAAgAkGE88EANgIEIAIgADYCACACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQcjBwAAgAkEEakHIwcAAIAJBCGpBqM3AABDSAQALZwEBfyMAQSBrIgIkACACQYTzwQA2AgQgAiAANgIAIAJBGGogAUEQaikCADcDACACQRBqIAFBCGopAgA3AwAgAiABKQIANwMIIAJBtNTAACACQQRqQbTUwAAgAkEIakHk3sEAENIBAAt3AQF/IwBBEGsiAiQAIAIgACgCACIAQQhqNgIEIAIgADYCCCACIABBDGo2AgwgAUGU6MAAQQpB5efAAEEHIAJBBGpBoOjAAEH858AAQQcgAkEIakGw6MAAQfDlwABBBiACQQxqQcDowAAQiQMhACACQRBqJAAgAAt3AQF/IwBBEGsiAiQAIAIgACgCACIAQQxqNgIEIAIgAEEIajYCCCACIAA2AgwgAUHc58AAQQlB3LTBAEECIAJBBGpBsOfAAEHl58AAQQcgAkEIakHs58AAQfznwABBByACQQxqQYTowAAQiQMhACACQRBqJAAgAAthAQF/IwBBIGsiBCQAIAQgATYCBCAEIAA2AgAgBEEYaiACQRBqKQIANwMAIARBEGogAkEIaikCADcDACAEIAIpAgA3AwggBEGMhsEAIARBBGpBjIbBACAEQQhqIAMQ0gEAC2EBAX8jAEEgayIEJAAgBCABNgIEIAQgADYCACAEQRhqIAJBEGopAgA3AwAgBEEQaiACQQhqKQIANwMAIAQgAikCADcDCCAEQYC+wQAgBEEEakGAvsEAIARBCGogAxDSAQALXgECfyAAIAEoAggiAkEHakF4cWogASgCABEBAAJAIABBf0YNACAAIAAoAgQiA0EBazYCBCADQQFHDQBBBCACIAJBBE0bIgIgASgCBGpBB2pBACACa3FFDQAgABB+CwtfAQF/IAApAwBCAFIEQCAAQUBrEPoFIABBIGooAgAiAQRAIABBLGooAgAgAUECdEELakF4cWsQfgsgAEE0aiIBKAIAIABBOGooAgAQmQkgAEEwaigCACABKAIAENwHCwteAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqQeCQwAAgAkEIahCTASEAIAJBIGokACAAC1wBAn8jAEEgayICJAAgASgCBCEDIAEoAgAhASACQRhqIABBEGopAgA3AwAgAkEQaiAAQQhqKQIANwMAIAIgACkCADcDCCABIAMgAkEIahCTASEAIAJBIGokACAAC14BAX8jAEEgayICJAAgAiAAKAIANgIEIAJBGGogAUEQaikCADcDACACQRBqIAFBCGopAgA3AwAgAiABKQIANwMIIAJBBGpB7KHAACACQQhqEJMBIQAgAkEgaiQAIAALOwECfyMAQRBrIgEkACABQQhqQeABQQgQowcgASgCCCICBEAgACACNgIEIABBBDYCACABQRBqJAAPCwALVwEBfwJAAkACQEECIAAoAhAiAUECayABQQJJGw4DAAIBAgsgAEEEaigCACAAQQhqKAIAEIYIDwsgABCZByAAQRBqEJkHDwsgACgCACAAQQRqKAIAEIYIC2MBAX8jAEEQayIFJAAgBSABIAMgBCACKAIoEQUAAkAgBSgCCARAIAAgBSkDADcCACAAQQhqIAVBCGopAwA3AgAMAQsgBS0AACEBIABBADYCCCAAIAEQ7gc6AAALIAVBEGokAAtoAQJ/IwBBEGsiAiQAIAJBCGogARCDBwJAIAIoAggiAUUEQCAAQQA2AgQMAQsgAigCDCEDIAAgAUEEaigCACABQQhqKAIAEJQFIABBGGogAygCCDYCACAAIAMpAwA3AxALIAJBEGokAAtbAQF/IwBBIGsiAiQAIAIgADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqQeyhwAAgAkEIahCTASEAIAJBIGokACAAC2EBAX8jAEEgayICJAAgAkEYakIANwMAIAJCADcDECACIAEgAkEQahD8AQJAIAIoAgBFBEAgAEEEOgAADAELIAIoAgQhASAAIAJBCGooAgA2AgQgACABNgIACyACQSBqJAALWwEBfyMAQSBrIgIkACACIAA2AgQgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakGYgMEAIAJBCGoQkwEhACACQSBqJAAgAAtbAQF/IwBBIGsiAiQAIAIgADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqQfCiwQAgAkEIahCTASEAIAJBIGokACAAC1sBAX8jAEEgayICJAAgAiAANgIEIAJBGGogAUEQaikCADcDACACQRBqIAFBCGopAgA3AwAgAiABKQIANwMIIAJBBGpBiKPBACACQQhqEJMBIQAgAkEgaiQAIAALWwEBfyMAQSBrIgIkACACIAA2AgQgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakGgo8EAIAJBCGoQkwEhACACQSBqJAAgAAtyAQF/IwBBEGsiAiQAIAIgADYCBCACIABBCGo2AgggAiAAQRBqNgIMIAFBsLnBAEEeQc65wQBBAyACQQRqQdS5wQBB5LnBAEEKIAJBCGpB8LnBAEGAusEAQQ4gAkEMakGQusEAEIkDIQAgAkEQaiQAIAALXQECfyAAKAIIQRRsIQIgACgCBCEBA0AgAgRAIAEtAABFBEAgAUEEahCECCABQQxqEIQICyABQRRqIQEgAkEUayECDAELCyAAKAIAIgEEQCAAKAIEIAFBFGwQpAgLC2EBAn8gACgCCCAAKAIEIgFrQRhuQRhsIQIDQCACBEAgASgCACABQQRqKAIAEIYIIAFBDGooAgAgAUEQaigCABCGCCACQRhrIQIgAUEYaiEBDAELCyAAKAIAIAAoAgwQzQcLXQIBfwF+IwBBIGsiAyQAIAEpAwAhBCADQRhqIAJBEGooAgA2AgAgA0EQaiACQQhqKQIANwMAIAMgAikCADcDCCAAIAEgA0EIahD3AzYCCCAAIAQ3AwAgA0EgaiQAC1sBAX8jAEEgayICJAAgAiAANgIEIAJBGGogAUEQaikCADcDACACQRBqIAFBCGopAgA3AwAgAiABKQIANwMIIAJBBGpB2N/BACACQQhqEJMBIQAgAkEgaiQAIAALhQEBAn8gACgCCCICIAAoAgBGBEAjAEEQayIDJAAgA0EIaiAAIAJBARD2AiADKAIIIAMoAgwQqQcgA0EQaiQAIAAoAgghAgsgACACQQFqNgIIIAAoAgQgAkEYbGoiACABKQMANwMAIABBCGogAUEIaikDADcDACAAQRBqIAFBEGopAwA3AwALYgEBfyAAKAIEKAIMIAFBAnRrQQRrKAIAIgEgACgCACIAQQxqKAIAIgJPBEAgASACQezbwAAQ/wMACyAAKAIAIAAoAgQgACgCCCABQShsaiIAQSBqKAIAIABBJGooAgAQmwcLZAEBfyAAKAIEKAIMIAFBAnRrQQRrKAIAIgEgACgCACIAKAIEIgJPBEAgASACQezbwAAQ/wMACyAAKAIIIgIoAgQgAigCCCAAKAIAIAFBKGxqIgBBIGooAgAgAEEkaigCABCbBwv4AwEKfyMAQSBrIgUkACAAKAIIQQJHBEAgBSAANgIAIAUgADYCBCAFIAVBGGo2AhAgBSAFQQRqNgIMIAUgBTYCCCAFQQhqIQcjAEEgayICJAAgAEEIaiIEKAIAIQECQAJAAkACQANAAkACQAJAIAFBA3EiCA4DAAEEAwsgBw0BCyACQQhqIAhyIQkCQANAAkAQ3QIhCiAEIAkgBCgCACIDIAEgA0YiBhs2AgAgAkEAOgAQIAIgCjYCCCACIAFBfHE2AgwgBg0AIAJBCGoQjAggAyIBQQNxIAhGDQEMAgsLA0AgAi0AEEUEQBC0AQwBCwsgAkEIahCMCAsgBCgCACEBDAELIAQgAUF8cUEBciAEKAIAIgMgASADRhs2AgAgASADRyEGIAMhASAGDQALIAdBrNzAACgCABEGACEDIAQoAgAhASAEQQJBACADGzYCACACIAFBA3EiAzYCBCADQQFHDQEgAUEBayEBA0AgAUUNASABKAIEIQMgASgCACEEIAFBADYCACAERQ0DIAFBAToACCACIAQ2AgggBEEQahD5ASACQQhqEO0GIAMhAQwACwALIAJBIGokAAwCCyACQQA2AhAgAkEEakGkwMAAIAJBCGpBiMHAABCsBAALQff4wQBBK0GYwcAAEJEFAAsLIAVBIGokACAAQQRqC1kBAn8jAEEQayICJAACQCABRQRAQQEhAwwBCyABQQBOBEAgAkEIaiABIAFBf3NBH3YQowcgAigCCCIDDQEACxDGBQALIAAgAzYCBCAAIAE2AgAgAkEQaiQAC7oBAQF/IwBBIGsiAiQAAkAgAUH/AXENABCzBw0AIABBAToABAsgACgCACEBIABBADYCACACIAE2AgQgAUF/RwRAIAJBADYCECMAQSBrIgAkACAAQci2wQA2AgQgACACQQRqNgIAIABBGGogAkEIaiIBQRBqKQIANwMAIABBEGogAUEIaikCADcDACAAIAEpAgA3AwggAEGchsEAIABBBGpBnIbBACAAQQhqQbS3wQAQ0gEACyACQSBqJAALXgEBfyMAQRBrIgMkAAJAAkACQCABQQJrDgIAAQILQQIhAQwBCyACIQELIAAgACgCCCIAIAEgABs2AghBBCEBIAAEQCADQQhqIAAQvQcgAygCCCEBCyADQRBqJAAgAQtSAQJ/IABBKGooAgAiAkEBahDrByEDIAAgACgCICACRwR/IAMFIABBIGogAhD9AiAAKAIoIgJBAWoLNgIoIABBJGooAgAgAkEDdGogATcCACADC2MBAX8jAEEQayIDJAAgASgCAEUEQCAAIAEoAgQ2AgAgACABQQhqLQAAOgAEIANBEGokAA8LIAMgASgCBDYCCCADIAFBCGotAAA6AAxBsPvBAEErIANBCGpBzI/AACACEOkDAAtjAQF/IwBBEGsiAyQAIAEoAgBFBEAgACABKAIENgIAIAAgAUEIai0AADoABCADQRBqJAAPCyADIAEoAgQ2AgggAyABQQhqLQAAOgAMQbD7wQBBKyADQQhqQdyPwAAgAhDpAwALYwEBfyMAQRBrIgMkACABKAIARQRAIAAgASgCBDYCACAAIAFBCGotAAA6AAQgA0EQaiQADwsgAyABKAIENgIIIAMgAUEIai0AADoADEGw+8EAQSsgA0EIakH8j8AAIAIQ6QMAC2UAAkACQAJAIAAoAgAOAwACAQILIABBCGooAgAgAEEMaigCABCGCCAAQcQAaigCACAAQcgAaigCABCGCAsPCyAAQQhqKAIAIABBDGooAgAQhgggAEEUaigCACAAQRhqKAIAENMHC1IAIANBA3QhAyACQQRqIQIgACABAn8DQCADRQRAQQAhAEGolcIADAILIANBCGshAyACKAIAIQAgAkEIaiECIABFDQALIAJBDGsoAgALIAAQuAELUgAgA0EDdCEDIAJBBGohAiAAIAECfwNAIANFBEBBACEAQaiVwgAMAgsgA0EIayEDIAIoAgAhACACQQhqIQIgAEUNAAsgAkEMaygCAAsgABCKAQtTAQF/IwBBIGsiAiQAIAAoAgAhACACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCAAIAJBCGoQvgQhACACQSBqJAAgAAtjAQF/IwBBEGsiAyQAIAEoAgBFBEAgACABKAIENgIAIAAgAUEIai0AADoABCADQRBqJAAPCyADIAEoAgQ2AgggAyABQQhqLQAAOgAMQbD7wQBBKyADQQhqQciGwQAgAhDpAwALYwEBfyMAQRBrIgMkACABKAIARQRAIAAgASgCBDYCACAAIAFBCGotAAA6AAQgA0EQaiQADwsgAyABKAIENgIIIAMgAUEIai0AADoADEGw+8EAQSsgA0EIakHYhsEAIAIQ6QMAC2MBAX8jAEEQayIDJAAgASgCAEUEQCAAIAEoAgQ2AgAgACABQQhqLQAAOgAEIANBEGokAA8LIAMgASgCBDYCCCADIAFBCGotAAA6AAxBsPvBAEErIANBCGpBmI3BACACEOkDAAtjAQF/IwBBEGsiAyQAIAEoAgBFBEAgACABKAIENgIAIAAgAUEIai0AADoABCADQRBqJAAPCyADIAEoAgQ2AgggAyABQQhqLQAAOgAMQbD7wQBBKyADQQhqQciNwQAgAhDpAwALUgAgA0EDdCEDIAJBBGohAiAAIAECfwNAIANFBEBBACEAQaiVwgAMAgsgA0EIayEDIAIoAgAhACACQQhqIQIgAEUNAAsgAkEMaygCAAsgABCaAwtSACADQQN0IQMgAkEEaiECIAAgAQJ/A0AgA0UEQEEAIQBBqJXCAAwCCyADQQhrIQMgAigCACEAIAJBCGohAiAARQ0ACyACQQxrKAIACyAAEMYHC1MBAX8jAEEgayICJAAgACgCACEAIAJBGGogAUEQaikCADcDACACQRBqIAFBCGopAgA3AwAgAiABKQIANwMIIAAgAkEIahC/BCEAIAJBIGokACAAC1MBAX8jAEEgayICJAAgACgCACEAIAJBGGogAUEQaikCADcDACACQRBqIAFBCGopAgA3AwAgAiABKQIANwMIIAAgAkEIahDABCEAIAJBIGokACAAC1MBAX8jAEEgayICJAAgACgCACEAIAJBGGogAUEQaikCADcDACACQRBqIAFBCGopAgA3AwAgAiABKQIANwMIIAAgAkEIahDBBCEAIAJBIGokACAAC10BBH8gASgCCEEMbCEDIAEoAgQhBEF/IQUCQANAIANFDQEgA0EMayEDIAVBAWohBSAEKAIAIQYgBEEMaiEEIAIgBkcNAAsgACABIAVBoPvBABCqBA8LIABBADYCCAtjAQF/IwBBEGsiAyQAIAEoAgBFBEAgACABKAIENgIAIAAgAUEIai0AADoABCADQRBqJAAPCyADIAEoAgQ2AgggAyABQQhqLQAAOgAMQbD7wQBBKyADQQhqQdywwQAgAhDpAwALUgAgA0EDdCEDIAJBBGohAiAAIAECfwNAIANFBEBBACEAQaiVwgAMAgsgA0EIayEDIAIoAgAhACACQQhqIQIgAEUNAAsgAkEMaygCAAsgABDVAgtTAQF/IwBBIGsiAiQAIAAoAgAhACACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCAAIAJBCGoQxgQhACACQSBqJAAgAAtSACADQQN0IQMgAkEEaiECIAAgAQJ/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AxAgACABKQMYNwMYIABBJmogAUEmai0AADoAACAAQSRqIAFBJGovAQA7AQALUwEBfyACIAEoAggiA0sEQCACIANB4KLBABDNCAALIAFBADYCCCAAIAI2AgggACABNgIQIAAgAyACazYCDCAAIAEoAgQiATYCBCAAIAEgAmo2AgALTAEBfyAAKAIIIgEgASgCACIBQQFrNgIAIAFBAUYEQCAAKAIIEOwCCwJAIABBf0YNACAAIAAoAgQiAUEBazYCBCABQQFHDQAgABB+CwtMAgF/AX4jAEEQayIDJAAgA0EIaiAAKAIIIAEgAhC8AyADLQAIIgFBBEcEQCADKQMIIQQgABD1ByAAIAQ3AgALIANBEGokACABQQRHC0YAIAEoAgAiAUEBcQRAIAEgBBEGACACIAMQlAkhASAAIAM2AgggACABNgIEIAAgAiADaiABazYCAA8LIAAgASACIAMQ4gMLSwECfyMAQRBrIgEkACABQQhqIANBABCRBCABKAIIIQQgACABKAIMIgU2AgQgACAENgIAIAUgAiADEJIJGiAAIAM2AgggAUEQaiQAC0oBAX8CQCABLQAUQQdHBEBBACEBDAELIAEoAgAiAkEMaigCAEEAIAIoAghBAUYbIQEgAkEQaigCACECCyAAIAI2AgQgACABNgIAC0UBAX8jAEEgayICJAAgAkEYaiABQQhqKAIANgIAIAIgASkCADcDECACQQhqIAJBEGoQ9gQgACACKQMINwMAIAJBIGokAAtTAQF/IAAgAUEYaigCADYCGCAAIAFBHGooAgAiAjYCECAAIAJBCGo2AgggACACIAEoAhBqQQFqNgIMIAAgAikDAEJ/hUKAgYKEiJCgwIB/gzcDAAtPAQF/IAEoAgAiASABKAIAIgJBAWo2AgAgAkEASARAAAsQ2AchAiAAQQA2AgggAEHw6sAANgIEIAAgAjYCACACIAE2AgAgAEEMakEAOwEAC00BAX8jAEEQayIBJAAgASABIAEQpQYCQCABKAIARQRAIABBBDoAAAwBCyABKAIEIQIgACABQQhqKAIANgIEIAAgAjYCAAsgAUEQaiQAC00BAX8jAEEQayIBJAAgASABIAEQpAYCQCABKAIARQRAIABBBDoAAAwBCyABKAIEIQIgACABQQhqKAIANgIEIAAgAjYCAAsgAUEQaiQAC00BAX8jAEEQayIBJAAgASABIAEQogYCQCABKAIARQRAIABBBDoAAAwBCyABKAIEIQIgACABQQhqKAIANgIEIAAgAjYCAAsgAUEQaiQAC0cBAX4jAEEQayIBJAAgAUEIaiABIAEgARDLBiABLQAIIgJBBEcEQCABKQMIIQMgABDsBSAAIAM3AgALIAFBEGokACACQQRHC0oBAX8jAEFAaiIDJAACQCACIAEgA0HAABCTBSICQf8BcUEDRgRAIAAgA0HAABCSCRoMAQsgAEEJOgAQIAAgAjoAAAsgA0FAayQAC00BAX8jAEEQayIBJAAgASABIAEQpwYCQCABKAIARQRAIABBBDoAAAwBCyABKAIEIQIgACABQQhqKAIANgIEIAAgAjYCAAsgAUEQaiQAC0kBA38jAEEQayIDJAAgA0EIaiACEMsEIAMoAgghBCAAIAMoAgwiBTYCBCAAIAQ2AgAgBSABIAIQkgkaIAAgAjYCCCADQRBqJAALSAEBfyACIAAoAgAiACgCACAAKAIIIgNrSwRAIAAgAyACEIEDIAAoAgghAwsgACgCBCADaiABIAIQkgkaIAAgAiADajYCCEEAC04BAX8jAEEQayIAJAAgASgCAEGF88EAQQsgASgCBCgCDBEEACECIABBADoADSAAIAI6AAwgACABNgIIIABBCGoQrAMhASAAQRBqJAAgAQtOAQF/IwBBEGsiACQAIAEoAgBB2MHAAEELIAEoAgQoAgwRBAAhAiAAQQA6AA0gACACOgAMIAAgATYCCCAAQQhqEJoEIQEgAEEQaiQAIAELQAAgACABaiEBIAMoAgBBAWohAANAIAIEQCADIAA2AgAgAUEAOgAAIAFBAWohASAAQQFqIQAgAkEBayECDAELCwtNAQF/IAAoAgAgACgCBCgCABEBACAAKAIEKAIEBEAgACgCABB+CyAAKAIIIABBDGoiASgCACgCABEBACABKAIAKAIEBEAgACgCCBB+Cws+AQF/AkAgASADTQ0AIAAgA0GQAmxqQQAgASADSxsiAC0AjAJBAkYNACAAQQhqQQAgACkDACACURshBAsgBAshAQF/QeAAQQQQ1AciAQRAIAAgATYCBCAAQQQ2AgAPCwALSQEBfwJAAkAgAUH///8fSw0AIAFBBXQiAkEASA0AIAIgAUGAgIAgSUEDdBDUByICRQ0BIAAgAjYCBCAAIAE2AgAPCxDGBQALAAtIAQJ/IwBBIGsiAiQAIAJBGGoiAyABENEBIAIgAikDGDcDGCACQQhqIAMQ9gUgACACKQIMNwIEIAAgAigCCDYCACACQSBqJAALTQICfwF+IwBBEGsiASQAIAFBCGogABD3BSABKAIMIQAgASgCCCICKAIAIAIoAgQoAngRBwAhAyAAIAAoAgBBAWs2AgAgAUEQaiQAIAMLTQICfwF+IwBBEGsiASQAIAFBCGogABD3BSABKAIMIQAgASgCCCICKAIAIAIoAgQoAnwRBwAhAyAAIAAoAgBBAWs2AgAgAUEQaiQAIAMLTgICfwF+IwBBEGsiASQAIAFBCGogABD3BSABKAIMIQAgASgCCCICKAIAIAIoAgQoAoABEQcAIQMgACAAKAIAQQFrNgIAIAFBEGokACADC04CAn8BfiMAQRBrIgEkACABQQhqIAAQ9wUgASgCDCEAIAEoAggiAigCACACKAIEKAKEAREHACEDIAAgACgCAEEBazYCACABQRBqJAAgAwtHACABKAIAQQJGBEAgACACKQIANwIAIABBCGogAkEIaikCADcCAA8LIAAgASkCADcCACAAQQhqIAFBCGopAgA3AgAgAhCZBwtGAQJ/IwBBIGsiASQAIAFBGGoiAhCHByABIAEpAxg3AxggAUEIaiACEPYFIAAgASkCDDcCBCAAIAEoAgg2AgAgAUEgaiQAC0cBAX8CQCAAKAIYRQ0AA0AgABDmAyIBRQ0BIAFBMGsQhQcMAAsACwJAIABBKGooAgBFDQAgAEEkaigCAEUNACAAKAIgEH4LCz8AAkAgASACTQRAIAIgBE0NASACIAQgBRDNCAALIAEgAiAFEM4IAAsgACACIAFrNgIEIAAgAyABQQV0ajYCAAs/AAJAIAEgAk0EQCACIARNDQEgAiAEIAUQzQgACyABIAIgBRDOCAALIAAgAiABazYCBCAAIAMgAUEYbGo2AgALQQEBfyABKAIAIgIgASgCBE8Ef0EABSABIAJBAWo2AgAgASgCCCgCACACEAwhAUEBCyECIAAgATYCBCAAIAI2AgALQwECfyMAQRBrIgMkACABIAIQDSEBIANBCGoQ4AYgAygCDCECIAAgAygCCCIENgIAIAAgAiABIAQbNgIEIANBEGokAAtDAQJ/IwBBEGsiAyQAIAEgAhAfIQEgA0EIahDgBiADKAIMIQIgACADKAIIIgQ2AgAgACACIAEgBBs2AgQgA0EQaiQAC0MBAn8jAEEQayIDJAAgASACECEhASADQQhqEOAGIAMoAgwhAiAAIAMoAggiBDYCACAAIAIgASAEGzYCBCADQRBqJAALQwEBfyMAQRBrIgMkACADIAEgAhB8IAMoAgQhASADKAIAIQIgACADQQhqKAIANgIEIABBACABIAIbNgIAIANBEGokAAtKAgF/AX4jAEEQayICJAAgAC0AAEUEQCAAKQMIIQMgAkEQaiQAIAMPCyACIAAtAAE6AA9BsPvBAEErIAJBD2pB+IbBACABEOkDAAtKAgF/AX4jAEEQayICJAAgAC0AAEUEQCAAKQMIIQMgAkEQaiQAIAMPCyACIAAtAAE6AA9BsPvBAEErIAJBD2pBwKzBACABEOkDAAtJAQF/IwBBEGsiAyQAIAEoAgBFBEAgACABKQIENwMAIANBEGokAA8LIAMgASkCBDcDCEGw+8EAQSsgA0EIakG4jcEAIAIQ6QMAC0UBAn8gACgCBCIAKAIEIgIgACgCDCIBSQRAIAEgAkGk3cEAEMkIAAsgACgCACABakEAIAIgAWsQkQkaIAAgACgCBDYCDAtMAQF/IwBBEGsiAiQAIAEoAgBFBEAgACABKQIENwMAIAJBEGokAA8LIAIgASkCBDcDCEGw+8EAQSsgAkEIakHQrMEAQbSuwQAQ6QMAC0UBAX8gACgCCCIDIAAoAgBGBEAgACADEP0CIAAoAgghAwsgACADQQFqNgIIIAAoAgQgA0EDdGoiACACNgIEIAAgATYCAAtCAQJ/IwBBEGsiAiQAIAEgACgCACAAKAIIIgNrSwRAIAJBCGogACADIAEQ9gIgAigCCCACKAIMEKkHCyACQRBqJAALPQAgASgCBARAIAAgASkCADcCACAAQQhqIAFBCGooAgA2AgAPCyABLQAAIQEgAEEANgIEIAAgARCICDoAAAtKAQF/IwBBIGsiACQAIABBFGpBATYCACAAQRxqQQA2AgAgAEGglcIANgIQIABBqJXCADYCGCAAQQA2AgggAEEIakGUkcAAEIEGAAtFAgF+AX8gACgCACEAIAEoAhgiA0EQcUUEQCAAKQMAIQIgA0EgcUUEQCACIAEQ7AgPCyACIAEQ3wIPCyAAKQMAIAEQ3gILSgEBfyMAQSBrIgAkACAAQRRqQQE2AgAgAEEcakEANgIAIABBiOPAADYCECAAQaiVwgA2AhggAEEANgIIIABBCGpBwL7AABCBBgALQQEDfyMAQRBrIgIkACABECIhASACQQhqEOAGIAIoAgwhAyAAIAIoAggiBDYCACAAIAMgASAEGzYCBCACQRBqJAALSgEBfyMAQSBrIgAkACAAQRRqQQE2AgAgAEEcakEANgIAIABB+MrAADYCECAAQaiVwgA2AhggAEEANgIIIABBCGpBsMvAABCBBgALSgEBfyMAQSBrIgAkACAAQRRqQQE2AgAgAEEcakEANgIAIABB+MrAADYCECAAQaiVwgA2AhggAEEANgIIIABBCGpBwMvAABCBBgALSgEBfyMAQSBrIgAkACAAQRRqQQE2AgAgAEEcakEANgIAIABBiOPAADYCECAAQaiVwgA2AhggAEEANgIIIABBCGpB8OPAABCBBgALPAACQCABIAJNBEAgAiAETQ0BIAIgBCAFEM0IAAsgASACIAUQzggACyAAIAIgAWs2AgQgACABIANqNgIACzoBAX8gAEEYaigCAARAIABBEGogACkDACAAQQhqKQMAIAEoAgAQ/AMgARD1AyECCyACQQhqQQAgAhsLPQAgAiADTwRAIAAgAzYCBCAAIAE2AgAgAEEMaiACIANrNgIAIAAgASADajYCCA8LQZCBwQBBIyAEEJEFAAs9AQF/IAEoAgAiAkEASARAAAsgASACQQFqNgIAIABBCGogATYCACAAIAFBCGo2AgQgACABLQAEQQBHNgIACzoBA38DQCACQRhHBEAgACACaiIDKAIAIQQgAyABIAJqIgMoAgA2AgAgAyAENgIAIAJBBGohAgwBCwsLQAEBfyMAQSBrIgMkACADIAI2AhggAyABNgIUIAMgAjYCECADQQhqIANBEGoQ9gQgACADKQMINwMAIANBIGokAAtAAQF/IAAoAgAoAgAiAkEEaigCACACQQhqKAIAIAAoAgQoAgwgAUEFdGtBIGsiAEEEaigCACAAQQhqKAIAEOgIC0MCAX8BfiMAQRBrIgUkACAFQQhqIAEgAhD8BSAFKQMIIQYgBSADIAQQ/AUgACAFKQMANwIIIAAgBjcCACAFQRBqJAALPQEBfyAAIAAoAggiAUEBazYCCCABQQFGBEAgACgCACEB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QbD7wQBBKyADQQxqQaDGwQAgAhDpAwALOAEBfyAAKAIYEIsIIABBIGooAgAiAQRAIAAoAhwgARCGCAsgACgCBARAIAAQwwQgAEEMahDDBAsLOwEBfyMAQRBrIgIkACABEJsIIAJBCGogARDoBiACKAIMIQEgACACKAIINgIAIAAgATYCBCACQRBqJAALOgEBfyMAQRBrIgMkACADQQhqIAIQywQgAygCDCABIAIQkgkhASAAIAI2AgQgACABNgIAIANBEGokAAs+AQF/IwBBEGsiAiQAIABFBEAgAkEQaiQAIAEPCyACIAE2AgxBsPvBAEErIAJBDGpBqOPBAEHM5cEAEOkDAAs3ACAAKAIAKAIAIgApAwAgAEEIaikDACABKAIMIAJB6H1sakGYAmsiACkDACAAQQhqKAIAEN4DCzUAIAAoAgAoAgAiACkDACAAQQhqKQMAIAEoAgwgAkFsbGpBFGsiACgCACAAQQRqKAIAELoBCzEAIAFBGGwhAQNAIAEEQCAAKAIAIABBBGooAgAQhgggAUEYayEBIABBGGohAAwBCwsL2AEBAX8jAEEgayICJAAgAkEBOgAYIAIgATYCFCACIAA2AhAgAkGsnsAANgIMIAJBqJXCADYCCCMAQRBrIgAkACACQQhqIgEoAggiAkUEQEH3+MEAQStBrMrAABCRBQALIAAgASgCDDYCCCAAIAE2AgQgACACNgIAIwBBEGsiASQAIAFBCGogAEEIaigCADYCACABIAApAgA3AwAgASgCACIAQRRqKAIAIQICQAJAIABBDGooAgAOAgAAAQsgAg0AIAEoAgQtABAQgQUACyABKAIELQAQEIEFAAs3AQF/IwBBEGsiAyQAIAMgASACEKYFIABBCGogA0EIaigCADYCACAAIAMpAwA3AgAgA0EQaiQACzcBAX8jAEEQayIDJAAgAyABIAIQhQUgAEEIaiADQQhqKAIANgIAIAAgAykDADcCACADQRBqJAALOQEBfwJAIAEoAhgiAkEQcUUEQCACQSBxDQEgACABEMoIDwsgACgCACABENwDDwsgACgCACABEN0DCzIBAn8jAEEwayIDJAAgA0EIaiIEIAJBKBCSCRogASAAIARBKBCgAyEBIANBMGokACABCzEAIAFBDGwhAQNAIAEEQCAAKAIAIABBBGooAgAQhgggAUEMayEBIABBDGohAAwBCwsLNgEBfyMAQRBrIgIkACACIAEQMSACKAIAIQEgACACKwMIOQMIIAAgAUEAR603AwAgAkEQaiQACzIBAn8jAEFAaiIDJAAgA0EIaiIEIAJBOBCSCRogASAAIARBOBCgAyEBIANBQGskACABCzgAIAEoAgBFBEAgACABKAIEIAFBCGooAgAQmwQPCyAAIAEpAgQ3AgAgAEEIaiABQQxqKAIANgIACzgBAX8jAEEQayIDJAAgA0EIaiAAIAEQsQcgAygCCCADKAIMIAIQkAQoAgAQACEBIANBEGokACABCzYBAX8gACgCACgCACICKAIIIAAoAgQoAgwgAUHofWxqQZgCayIAKAIIRiACKQMAIAApAwBRcQs5ACABKAIERQRAIABBADYCBCAAIAI2AgAPCyAAIAEpAgA3AgAgAEEIaiABQQhqKAIANgIAIAIQiwgLOQEBfwJAIAEoAhgiAkEQcUUEQCACQSBxDQEgACABEP8GDwsgACgCACABENwDDwsgACgCACABEN0DCzAAIAACfyABLQAARQRAIAAgASkCBDcCBEEADAELIAAgAS0AARCICDoAAUEBCzoAAAsyACAAAn8gAS0AAEEERgRAIAAgASgCBDYCBEEADAELIAAgASkCABDGBjoAAUEBCzoAAAsxAQF/IwBBEGsiAiQAIAAEQCACQRBqJAAPC0Gw+8EAQSsgAkEIakHIk8AAIAEQ6QMACzwBAX8jAEEQayICJAAgAiAANgIMIAFBzPzAAEEFQdH8wABBAyACQQxqQdT8wAAQogMhACACQRBqJAAgAAs8AQF/IwBBEGsiAiQAIAIgADYCDCABQbT9wABBBkHR/MAAQQMgAkEMakHU/MAAEKIDIQAgAkEQaiQAIAALPAEBfyMAQRBrIgIkACACIAA2AgwgAUH4/cAAQQZB0fzAAEEDIAJBDGpB1PzAABCiAyEAIAJBEGokACAACzgAIAIgASkDCFQEQCAAIAEoAhA2AgggACABKQMAIAJCKH58NwMADwtBiIfBAEEXQaCHwQAQ6wYACzAAIAEtAAhBBEcEQCAAIAFBKBCSCRoPCyABLQAAIQEgAEEEOgAIIAAgARCICDoAAAswACABLQAgQQJHBEAgACABQSgQkgkaDwsgAS0AACEBIABBAjoAICAAIAEQ7gc6AAALQwEBfyACQYCU69wDRiEDA0ACQAJAAkAgACgCACgCCCICDgMCAQEAC0EDIQILIAIPCyADBEAQtAEMAQUQygUACwALAAs8AQF/IwBBEGsiAiQAIAIgADYCDCABQeK0wQBBBEHmtMEAQQYgAkEMakHstMEAEKIDIQAgAkEQaiQAIAALMQAgAS0AEEEJRwRAIAAgAUHAABCSCRoPCyABLQAAIQEgAEEJOgAQIAAgARCICDoAAAs8AQF/IwBBEGsiAiQAIAIgADYCDCABQZjAwQBBBUGdwMEAQQUgAkEMakGkwMEAEKIDIQAgAkEQaiQAIAALMAAgAAJ/IAEtAABFBEAgACABKAIENgIEQQAMAQsgACABLQABEPoHOgABQQELOgAACzYBAX8jAEEQayICJAAgAkEIaiABEJwFIAIoAgwhASAAIAIoAgg2AgAgACABNgIEIAJBEGokAAtDAQF/IAFBgJTr3ANGIQIDQAJAAkACQCAAKAIAKAIIIgEOAwIBAQALQQMhAQsgAQ8LIAIEQBC0AQwBBRDKBQALAAsACy8BAX8gASgCACIEQQFxBEAgACABIAQgBEF+cSACIAMQiQQPCyAAIAQgAiADENoFCz0BAX8gACgCACEBAkAgAEEEai0AAA0AQYydwgAoAgBB/////wdxRQ0AEJgJDQAgAUEBOgABCyABQQA6AAALNQEBf0EMEFAiA0UEQAALIAMgAToACCADQfjuwAA2AgQgAyACNgIAIAAgA61CIIZCA4Q3AgALMwACQCAAQfz///8HSw0AIABFBEBBBA8LIAAgAEH9////B0lBAnQQzwEiAEUNACAADwsACzQAIwBBEGsiASQAIAFBCGpBAUHk/MAAQRMQiwUgAEEBNgIAIAAgASkDCDcCBCABQRBqJAALLQACQCAAIAFNBEAgASACTQ0BIAEgAiADEM0IAAsgACABIAMQzggACyABIABrCzQAIwBBEGsiASQAIAFBCGpBAUG6/cAAQRQQiwUgAEEBNgIAIAAgASkDCDcCBCABQRBqJAALNAAjAEEQayIBJAAgAUEIakEBQf79wABBFBCLBSAAQQE2AgAgACABKQMINwIEIAFBEGokAAs4AQF/IwBBEGsiAiQAIAIgACgCADYCDCABQajgwABBByACQQxqQbDgwAAQigMhACACQRBqJAAgAAs0ACMAQRBrIgEkACABQQhqQSdB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AgAQVwsnAQF/IAEgAmogA6dBGXYiBDoAACACQQhrIABxIAFqQQhqIAQ6AAALKgACQCAAKAIABEAgACgCBEUNAQsgAEEIaigCACIAIAAoAgBBAWs2AgALCy0AIwBBEGsiASQAIAFBCGpBAUH3/MAAQRcQiwUgACABKQMINwIAIAFBEGokAAstACMAQRBrIgEkACABQQhqQQFBjv3AAEEUEIsFIAAgASkDCDcCACABQRBqJAALLQAjAEEQayIBJAAgAUEIakEBQc79wABBGRCLBSAAIAEpAwg3AgAgAUEQaiQACy0AIwBBEGsiASQAIAFBCGpBAUHO/cAAQRkQiwUgACABKQMINwIAIAFBEGokAAstACMAQRBrIgEkACABQQhqQQFBkv7AAEEZEIsFIAAgASkDCDcCACABQRBqJAALLQAjAEEQayIBJAAgAUEIakEBQZL+wABBGRCLBSAAIAEpAwg3AgAgAUEQaiQACy4BAX8jAEFAaiIDJAAgASAAIAMgAkHAABCSCSIBQcAAEKADIQIgAUFAayQAIAILVgEEfyMAQRBrIgIkACACQQhqIgMgAUEMaigCACABQQhqKAIAIgQgASgCACIFGzYCBCADIAQgASgCBCAFGzYCACAAIAIoAgggAigCDBCbBCACQRBqJAALMQEBfyAAKAIAIgIoAgAgAigCBCAAKAIEKAIMIAFBBXRrQSBrIgAoAgQgACgCCBCbBwsmACABQQN0IQEDQCABBEAgAUEIayEBIAAQiAIgAEEIaiEADAELCwswAQJ/IAIgASACIAMQjAQiBGotAAAhBSABIAIgBCADEMkGIAAgBToABCAAIAQ2AgALKAAgACgCACgCACIAKQMAIABBCGopAwAgASgCDCACQVRsakEsaxC2AQsoACAAKAIAKAIAIgApAwAgAEEIaikDACABKAIMIAJBUGxqQTBrELYBCzABAX8CQCAAKAIAIgFFDQAgASAAKAIEKAIAEQEAIAAoAgQoAgRFDQAgACgCABB+CwsrAAJ/IANFBEAgASACEM8BDAELIAEgAhC6BgshAiAAIAE2AgQgACACNgIACygAIAFB/wFxBH9BAQUgACgCAEH1n8AAQQEgAEEEaigCACgCDBEEAAsLKwEBfyMAQRBrIgIkACACQgI3AwAgAkIANwMIIAAgASACEPwBIAJBEGokAAsyAAJAIAFB/wFxDQBBjJ3CACgCAEH/////B3FFDQAQmAkNACAAQQE6AAELIABBADoAAAssACABQdjmwQAQzwcaQQgQUCIARQRAAAsgACACNgIEIABBADYCACAAEKgIAAsqAQF/IAAgAhCkByAAKAIIIgMgACgCBGogASACEJIJGiAAIAIgA2o2AggLKAEBfwJAIABBf0YNACAAIAAoAgQiAUEBazYCBCABQQFHDQAgABB+Cws6AQJ/QcCcwgAtAAAhAUHAnMIAQQA6AABBxJzCACgCACECQcScwgBBADYCACAAIAI2AgQgACABNgIACzABAX9BGBDXByIBQoGAgIAQNwIAIAEgACkCADcCCCABQRBqIABBCGopAgA3AgAgAQsqAQF/IAAgAhD0AiAAKAIIIgMgACgCBGogASACEJIJGiAAIAIgA2o2AggLKAAgARCmByAAQQhqIAE2AgAgACABQQhqNgIEIAAgAS0ABEEARzYCAAsoAQF/IwBBMGsiBCQAIAAgASACIAQgA0EwEJIJIgAQ9AEgAEEwaiQACyQAIAIgAEEBayIATQRAIAAgAkHc2MEAEP8DAAsgASAAQRRsagsoAQF/IAAoAgAiAQRAIAEgAEEMaigCACAAKAIQIABBFGooAgAQ6AULCygAIAEoAgBFBEAgAUF/NgIAIAAgATYCBCAAIAFBBGo2AgAPCxD4CAALKAAgASgCAEUEQCABQX82AgAgACABNgIEIAAgAUEIajYCAA8LEPgIAAsoAQF/IAAoAgAiASABKAIAIgFBAWs2AgAgAUEBRgRAIAAoAgAQvQMLCygBAX8gACgCACIBIAEoAgAiAUEBazYCACABQQFGBEAgACgCABDfBgsLSwEBfyMAQRBrIgMkACADIAI2AgggAyABNgIEIAMgADYCACMAQRBrIgAkACAAQQhqIANBCGooAgA2AgAgACADKQIANwMAQQEQgQUACyEAIAAoAgAiAEEBcQRAIABBfnEgASACEJoHDwsgABDVBQsoAQF/IAAoAgAiASABKAIAIgFBAWs2AgAgAUEBRgRAIAAoAgAQlQULCyEAIAEEfyACEIsIQQAFQQELIQEgACACNgIEIAAgATYCAAsoAQF/IAAoAgAiASABKAIAIgFBAWs2AgAgAUEBRgRAIAAoAgAQ8QMLCyYBAX8jAEEQayIBJAAgASAAELEGNgIM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Qf////8HcQR/EJgJBUEBCwsbAQF/IABBBGooAgAiAQRAIAAoAgAgARCGCAsLHQAgACkDAFAEQEH3+MEAQStBpK7BABCRBQALIAALLAAgAEEBOgAUIABBgICACDYCECAAQqCGgICAywA3AgggAELQgICAkAM3AgALGgAgASACKAIAEQEAIAIoAgQEQCABEH4LQQALGwAgAC0AAEUEQCAAQQRqEIQIIABBDGoQhAgLCxoBAX8gACgCACEBIABBfzYCACABRQRADwsACxsBAX8gARAbIQIgACABNgIEIAAgAkEBRzYCAAsbACAAKAIAIAAoAgQgASgCACABQQRqKAIAEHQLGgAgABCzB0EBczoAASAAIAEtAABBAEc6AAALGAAgACABNgIEIABBAyABIAFBA08bNgIACxgAIAAoAgBBCGogASACIAMgBBBkQf8BcQsVAEEBQQIgABA6IgBBAUYbQQAgABsLHAAgAEEIaiAAKAIAIAAoAgQgACgCDCgCCBEDAAsaACAAKAIAIABBBGooAgAQhgggAEEMahC1BguGAwIFfwJ+IAEgACgCBEsEQCMAQdAAayIDJAAgAyACNgIIIABBCGooAgAhAiADIANBCGo2AgwCQAJAIAIgASACaiIBTQRAIAAoAgAiBCAEQQFqIgVBA3ZBB2wgBEEISRsiBEEBdiABSQRAIANBKGogAkEsIAEgBEEBaiICIAEgAksbEPsCIAMoAjQiAkUNAiADIAMpAzg3AyAgAyACNgIcIAMgAykCLDcCFCADIAMoAigiBjYCEEFUIQRBACEBA0AgASAFRgRAIAApAgAhCCAAIAMpAxA3AgAgA0EYaiIBKQMAIQkgASAAQQhqIgApAgA3AwAgACAJNwIAIAMgCDcDECADQRBqEOYGDAULIAAoAgwiByABaiwAAEEATgRAIAMgBiACIANBDGogACABENYGENUGIAIgAygCAEF/c0EsbGogBCAHakEsEJIJGgsgAUEBaiEBIARBLGshBAwACwALIAAgA0EMakH2AEEsEKABDAILEMgFAAsgAygCLBoLIANB0ABqJAALCxYAIAEgAEEEaigCACAAQQhqKAIAEFcLEwAgAEUgAUEjTXJFBEAgARAcCwsVACABQf8BcUECRwRAIAAgARDMBAsLGQAgASACIAMQ4gYgAEEEOgAAIAAgAzYCBAsSACAAIAEQzwEiAARAIAAPCwALFgEBf0GAAkHAABDPASIABEAgAA8LAAsZAAJAIAFB/wFxDQAQswcNACAAQQE6AAALCxgAIAAgASAAIAEgAhCMBCIAIAIQyQYgAAsZAQF/IAEQOyECIAAgATYCBCAAIAJFNgIACxQAIAEEQCAAIAEQhggPCyAAEIsICxEAIAAEQCABIABBGGwQpAgLCxEAIAAEQCABIABBDGwQpAgLCxcAIABFBEBB9/jBAEErIAEQkQUACyAACxMAIACtIAFBCGogAhC4BkH/AXELEwAgAK0gAUEIaiACELcGQf8BcQsYAQF/IAEQUCECIAAgATYCBCAAIAI2AgALEQAgAARAIAEgAEECdBCkCAsLEQAgAAR/IAAgARDPAQUgAQsLEwAgACgCACIAQSRPBEAgABAcCwsZACAAKAIAIgAoAgAgASAAKAIEKAIQEQIACw8AIAAQUCIABEAgAA8LAAsRAQF/QQQQUCIABEAgAA8LAAsRAQF/QQwQUCIABEAgAA8LAAsRACAABEAgASAAQQF0EKQICwsRACAABEAgASAAQQN0EKQICwsRACAABEAgASAAQShsEKQICwsSACAABEAgACABQThBCBDoBQsLEgAgAARAIAEgAEGQAmwQpAgLCxEAIAAEQCABIABBMGwQpAgLCxIAIAAoAggEQCAAQQhqEPgGCwsZACAAp0UEQEH3+MEAQStBqL/BABCRBQALCxkAIAAoAgAiACgCACABIAAoAgQoAgwRAgALEQAgAARAIAEgAEE4bBCkCAsLEQAgAARAIAEgAEEUbBCkCAsLEQAgAARAIAEgAEEFdBCkCAsLFQAgACgCAEEIaiABIAIQjAFB/wFxCxUAIAAoAgBBCGogASACEIIBQf8BcQsVACAAKAIAQQhqIAEgAhCsAUH/AXELGQEBf0EIENcHIgEgADYCBCABQQA2AgAgAQsZACAAIAI2AgggACABKAIAKAIAKQMANwMACxoAIABFBEBB9/jBAEErQezYwQAQkQUACyAACxIAIAAoAgAEQCAAQQRqEPoFCwsWACAAp0UEQEH3+MEAQSsgARCRBQALCw4AIADAQcKXwgBqLQAACxkAIAEoAgBB3J3AAEEOIAEoAgQoAgwRBAALGQAgASgCAEHYtsAAQQUgASgCBCgCDBEEAAsZACABKAIAQcy9wABBCyABKAIEKAIMEQQACxkAIAEoAgBBzMnAAEEIIAEoAgQoAgwRBAALFQAgASAAKAIAIgAoAgQgACgCCBBXCxkAIAEoAgBB4OjAAEEVIAEoAgQoAgwRBAALEgAgAC0AAEEERwRAIAAQ7AULC18BBX8gAEGolcIANgIEIABBqJXCADYCACAAKAIMIgEEQCAAKAIIIgQgACgCECICKAIIIgNHBEAgAigCBCIFIANqIAQgBWogARCUCRogACgCDCEBCyACIAEgA2o2AggLCxkAIAEoAgBBrIbBAEEcIAEoAgQoAgwRBAALFAAgACgCBCIAIAAoAgBBAWs2AgALOwEBfyAAQQFqIQICQCABQf8BcQ0AQYydwgAoAgBB/////wdxRQ0AEJgJDQAgAkEBOgAACyAAQQA6AAALDgAgAMBBrJfCAGotAAALEgAgACgCAEEDRwRAIAAQyQELCxEAIAAoAgBBA0cEQCAAEHALCxIAIAAoAgBBA0cEQCAAEIcCCwsTACAAIAAoAhAiAEEBajYCECAACxMAIABBAWogARDJByAAQQA6AAALEgAgAEEEahC9CCAAQRxqEL0ICxMAIAAgASgCAEEIaiACIAMQiAELEwAgACABKAIAQQhqIAIgAxC9AgsSACAAKAIABEAgACgCBBCLCAsLEQAgACgCBARAIAAoAgAQfgsLFgAgACACNgIIIAAgASgCACkDADcDAAsOACAABEAgASAAEKQICwuyAQEBfyAAQQRqIAEQyQcjAEEgayIBJAAgACgCACECIABBADYCACABIAI2AgQCQCACQX9GBEAgAUEgaiQADAELIAFBADYCECMAQSBrIgAkACAAQci2wQA2AgQgACABQQRqNgIAIABBGGogAUEIaiIBQRBqKQIANwMAIABBEGogAUEIaikCADcDACAAIAEpAgA3AwggAEGk1MAAIABBBGpBpNTAACAAQQhqQbS3wQAQ0gEACwsRAEGV+vAAIABB/wFxQQN0dgsUACAAKAIAIAEgACgCBCgCDBECAAvMCAEDfyMAQfAAayIFJAAgBSADNgIMIAUgAjYCCAJAAkACQAJAIAUCfwJAAkAgAUGBAk8EQANAIAAgBmohByAGQQFrIQYgB0GAAmosAABBv39MDQALIAZBgQJqIgcgAUkNAiABQYECayAGRw0EIAUgBzYCFAwBCyAFIAE2AhQLIAUg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jMEANgIEIAAgATYCAAsTACAAQdiMwQA2AgQgACABNgIACxMAIABByIzBADYCBCAAIAE2AgALEAAgACgCCCABIAIQ4gZBAAsPACAAEJYEIABBDGoQlgQLEQAgACgCABCACCAAKAIAEH4LDwAgACABKAIAQQhqEJ8FCxMAIABB1MnBADYCBCAAIAE2AgALEwAgAEHkycEANgIEIAAgATYCAAsVACAAQZDzwQBBAkGE88EAQQEQ1AULFQAgAEGV88EAQQNBhPPBAEEBENQFCxUAIABBhPPBAEEBQYTzwQBBARDUBQsLACAABEAgABB+CwsTACAAQSg2AgQgAEGA/cEANgIACwsAIAEEQCAAEH4LCw4AIAEQuQcgACABEIQFC3cBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQQI2AgAgA0EcakECNgIAIANBLGpBATYCACADQayjwAA2AhAgA0EANgIIIANBATYCJCADIANBIGo2AhggAyADQQRqNgIoIAMgAzYCICADQQhqIAIQgQYACw4AIAA1AgBBASABEO0BCw4AIAAxAABBASABEO0BCw4AIAAoAgAaA0AMAAsAC3cBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQQI2AgAgA0EcakECNgIAIANBLGpBATYCACADQcyjwAA2AhAgA0EANgIIIANBATYCJCADIANBIGo2AhggAyADQQRqNgIoIAMgAzYCICADQQhqIAIQgQYAC3cBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQQI2AgAgA0EcakECNgIAIANBLGpBATYCACADQYCkwAA2AhAgA0EANgIIIANBATYCJCADIANBIGo2AhggAyADQQRqNgIoIAMgAzYCICADQQhqIAIQgQYAC2wBAX8jAEEQayIDJAAgAyABNgIMIAMgADYCCCMAQSBrIgAkACAAQQxqQQE2AgAgAEEUakEBNgIAIABByOHAADYCCCAAQQA2AgAgAEEDNgIcIAAgA0EIajYCGCAAIABBGGo2AhAgACACEIEGAAsOACAAKAIAIAEgAhCUAQsPACAAKAIALQAAIAEQnAcLCwAgACABEClBAEcLDQAgACABIAIgAxDUBAsSAEG1+MEAQQ9BvPzAABCRBQALEgBBtfjBAEEPQaT9wAAQkQUACxIAQbX4wQBBD0Ho/cAAEJEFAAsNACAAIAEgAiADEMYHCw4AIAAoAgAgASACEIIECw8AIAAoAgAgACgCDBDaBwsPACAAKAIAIAAoAgwQ3AcLDQAgACAAIAAgABDQBgsNACAAIAAgACAAEM4GCw0AIAAgASACIAMQnwMLDQAgACAAIAAgABDLBgsNACAAIAEgAiADENsECw4AIAAoAgAgACAAEKMFCw4AIAAoAgAgASACELwICw0AIAAgASACIAMQvQILDQADQCAALQAMRQ0ACwsPACAAKAIAKAIAIAEQ9QELDQADQCAALQAYRQ0ACwsOACABEKQEIAAgARCOBQsPACAAKAIAIAAoAgwQ3wcLDQAgACABIAIgAxCbBwsOACAAKAIAIAEgAhCZBQsNACAAIAEgAiADEOEECwsAIAAjAGokACMACwsAIABBASABEO0BCw0AIAFB3L3BAEECEFcLCQAgABALQQFGCwkAIAAQFEEARwsKACAAIAEgAhAaCwwAIAAoAgAgARCoAwsJACAAEB1BAEcLCQAgABAeQQBHCwkAIAAQIEEARwsJACAAIAEQJQALDAAgACgCACABEMoICw0AQcTUwABBGxD1CAALDgBB39TAAEHPABD1CAALDAAgACgCACABEMgGCwoAIAAQugMaQQELCQAgABAuQQBHCwsAIAAgASADEIMDCwwAIAAoAgAgARDwBQsLACAAIAIgAxCkAwsLACAAIAIgAxClAwsLACAAIAAgABCkBgsLACAAIAAgABCiBgsLACAAIAAgABClBgsJACAAIAIQ3ggLCwAgACAAIAAQowULDAAgACgCACABEIQJCwwAIAAoAgAgARDyBQsKACAAQRBqEPkBCwwAIAAgASkCADcDAAsMACAAIAEpAgg3AwALDAAgAC0AACABEJwHCwkAIAAQEkEBRgsMACAAKAIAIAEQlgILCwAgACABIAIQ5wILCwAgACABIAIQuwELCwAgACABIAMQ5gILCwAgACAAIAAQpwYLrwEBA38gASEFAkAgAkEPTQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALswIBB38CQCACIgRBD00EQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcSIEBEAgB0EATA0BIANBfHEiBkEEaiEBQQAgBEEDdCIJa0EYcSEEIAYoAgAhBgNAIAUgBiAJdiABKAIAIgYgBHRyNgIAIAFBBGohASAFQQRqIgUgAkkNAAsMAQsgB0EATA0AIAMhAQNAIAUgASgCADYCACABQQRqIQEgBUEEaiIFIAJJDQALCyAIQQNxIQQgAyAHaiEBCyAEBEAgAiAEaiEDA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA0kNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgMgAS0AACIERgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAMgBGshBQsgBQuWBQEIfwJAAkACfwJAIAIiBCAAIAFrSwRAIAEgBGohBiAAIARqIQIgBEEPSw0BIAAMAgsgBEEPTQRAIAAhAgwDCyAAQQAgAGtBA3EiBmohBSAGBEAgACECIAEhAwNAIAIgAy0AADoAACADQQFqIQMgAkEBaiICIAVJDQALCyAFIAQgBmsiBEF8cSIHaiECAkAgASAGaiIGQQNxIgMEQCAHQQBMDQEgBkF8cSIIQQRqIQFBACADQQN0IglrQRhxIQogCCgCACEDA0AgBSADIAl2IAEoAgAiAyAKdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgBiEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIARBA3EhBCAGIAdqIQEMAgsgAkF8cSEDQQAgAkEDcSIHayEIIAcEQCABIARqQQFrIQUDQCACQQFrIgIgBS0AADoAACAFQQFrIQUgAiADSw0ACwsgAyAEIAdrIgdBfHEiBGshAkEAIARrIQQCQCAGIAhqIgZBA3EiBQRAIARBAE4NASAGQXxxIghBBGshAUEAIAVBA3QiCWtBGHEhCiAIKAIAIQUDQCADQQRrIgMgBSAKdCABKAIAIgUgCXZyNgIAIAFBBGshASACIANJDQALDAELIARBAE4NACABIAdqQQRrIQEDQCADQQRrIgMgASgCADYCACABQQRrIQEgAiADSQ0ACwsgB0EDcSIBRQ0CIAQgBmohBiACIAFrCyEDIAZBAWshAQNAIAJBAWsiAiABLQAAOgAAIAFBAWshASACIANLDQALDAELIARFDQAgAiAEaiEDA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA0kNAAsLIAALCQAgACABEIcICwcAIABBfnELCgAgACgCABDVBQsLAEG8nMIAKAIARQsJACAAIAEQ3gULDwBBuJjCABDKBCgCABAACwkAIABBADYCAAsKACAAQYEoOwAACwkAIABBBDoAAAsJACAAQQE7AQALCQAgAEECNgIACw8AQciYwgAQygQoAgAQAAt5AQF+An9B6JzCACkDACIBQgBSBEBBAEHwnMIAIAFQGwwBC0H4nMIAAn4CQCAARQ0AIAApAwAhASAAQgA3AwAgAUIBUg0AIAApAwghASAAKQMQDAELQgEhAUICCzcDAEHwnMIAIAE3AwBB6JzCAEIBNwMAQfCcwgALC1sBAX8Cf0GAncIALQAAIgEEQEGBncIAQQAgARsMAQtBgZ3CACAABH8gAC0AACEBIABBADoAACAALQABQQAgAUEBcWtxBUEACzoAAEGAncIAQQE6AABBgZ3CAAsLBwAgABD1BwsEACAACw0AQvzOo+XczZib5gALDQBCxZ/g9bqY1vDaAAsMAEKxzs2E6fba1SkLBABBEgsEAEEUCwQAQRQLBABBFAsEAEEUCwQAQRQLDQBCzLGl3dTr+vGifwsNAELhutTy5Jfqlah/CwwAQsDE7qfmhabrDgsEAEEACwwAQqmMr6S11eWPVgsEAEIACwQAQRkLDQBCxuXsxvut5rKnfwvMAQEDfwJ/IwBBEGsiASQAAkACQAJ/QeCcwgAoAgAiAARAQeScwgBBACAAGwwBCxAoIQBB4JzCACgCACECQeCcwgBBATYCACACQeScwgAoAgAhAkHknMIAIAA2AgAgAhDEB0HknMIACyIABEAgASAAKAIAQSEQugUgASgCAA0BIAEoAgQiABAnQQFHDQIgAUEQaiQAIAAMAwtB+KrBAEHGACABQQhqQcjVwABBoKzBABDpAwALQdjVwABBJBD1CAALQfzVwABBPBD1CAALCw0A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MjMvanMtc3lzLTAuMy42MC9zcmMvbGliLnJzcmV0dXJuIHRoaXNQHxAAWQAAAMMWAAABAAAAeAAAAAQAAAAEAAAAkwAAAHgAAAAAAAAAAQAAAJIAAABjbG9zdXJlIGludm9rZWQgcmVjdXJzaXZlbHkgb3IgZGVzdHJveWVkIGFscmVhZHl4AAAABAAAAAQAAACTAAAAAQAAAC9ob21lL2NvbnN1bHRpbmcvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9naXRodWIuY29tLTFlY2M2Mjk5ZGI5ZWM4MjMvb25jZV9jZWxsLTEuMTYuMC9zcmMvaW1wX3N0ZC5ycyggEABgAAAApQAAAAkAAAAoIBAAYAAAAKsAAAA2AAAAfgAAAAAAAAABAAAAlAAAAH4AAAAEAAAABAAAAJUAAAB+AAAABAAAAAQAAACWAAAAQWNjZXNzRXJyb3JsaWJyYXJ5L3N0ZC9zcmMvdGhyZWFkL21vZC5yc2ZhaWxlZCB0byBnZW5lcmF0ZSB1bmlxdWUgdGhyZWFkIElEOiBiaXRzcGFjZSBleGhhdXN0ZWQAACEQADcAAADjIBAAHQAAAFUEAAANAAAAdW5jYXRlZ29yaXplZCBlcnJvcm90aGVyIGVycm9yb3V0IG9mIG1lbW9yeXVuZXhwZWN0ZWQgZW5kIG9mIGZpbGV1bnN1cHBvcnRlZGFyZ3VtZW50IGxpc3QgdG9vIGxvbmdpbnZhbGlkIGZpbGVuYW1ldG9vIG1hbnkgbGlua3Njcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWVkZWFkbG9ja2V4ZWN1dGFibGUgZmlsZSBidXN5cmVzb3VyY2UgYnVzeWZpbGUgdG9vIGxhcmdlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZHNlZWsgb24gdW5zZWVrYWJsZSBmaWxlbm8gc3RvcmFnZSBzcGFjZXdyaXRlIHplcm90aW1lZCBvdXRpbnZhbGlkIGRhdGFpbnZhbGlkIGlucHV0IHBhcmFtZXRlcnN0YWxlIG5ldHdvcmsgZmlsZSBoYW5kbGVmaWxlc3lzdGVtIGxvb3Agb3IgaW5kaXJlY3Rpb24gbGltaXQgKGUuZy4gc3ltbGluayBsb29wKXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtaXMgYSBkaXJlY3Rvcnlub3QgYSBkaXJlY3RvcnlvcGVyYXRpb24gd291bGQgYmxvY2tlbnRpdHkgYWxyZWFkeSBleGlzdHNicm9rZW4gcGlwZW5ldHdvcmsgZG93bmFkZHJlc3Mgbm90IGF2YWlsYWJsZWFkZHJlc3MgaW4gdXNlbm90IGNvbm5lY3RlZG5ldHdvcmsgdW5yZWFjaGFibGVob3N0IHVucmVhY2hhYmxlIChvcyBlcnJvciAAqIoQAAAAAADAIxAACwAAAJ+HEAABAAAAW2xpYnJhcnkvc3RkL3NyYy9wYXRoLnJz5SMQABcAAADYAgAAGAAAAOUjEAAXAAAA/QIAACMAAADlIxAAFwAAAP8CAAAdAAAA5SMQABcAAAALAwAAHgAAAOUjEAAXAAAAFwMAAB4AAADlIxAAFwAAAJ0DAAAiAAAA5SMQABcAAACPAwAAJgAAAOUjEAAXAAAAlwMAACYAAADlIxAAFwAAAIEDAAAgAAAA5SMQABcAAACCAwAAIgAAAOUjEAAXAAAAswMAACIAAADlIxAAFwAAAL4DAAAmAAAA5SMQABcAAADFAwAAJgAAADxsb2NrZWQ+bGlicmFyeS9zdGQvc3JjL3N5c19jb21tb24vdGhyZWFkX2luZm8ucnMAAADUJBAAKQAAABYAAAAzAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5ycxAlEAAcAAAAPgIAAA8AAABvcGVyYXRpb24gc3VjY2Vzc2Z1bHRpbWUgbm90IGltcGxlbWVudGVkIG9uIHRoaXMgcGxhdGZvcm0AAABQJRAAJQAAAGxpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC90aW1lLnJzAIAlEAAvAAAADQAAAAkAAACAJRAALwAAAB8AAAAJAAAAb3BlcmF0aW9uIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBwbGF0Zm9ybdAlEAAoAAAAJAAAAGNvbmR2YXIgd2FpdCBub3Qgc3VwcG9ydGVkAAAEJhAAGgAAAGxpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9sb2Nrcy9jb25kdmFyLnJzKCYQADgAAAAUAAAACQAAAGxpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9sb2Nrcy9tdXRleC5ycwAAcCYQADYAAAAUAAAACQAAAGNhbid0IHNsZWVwALgmEAALAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL3RocmVhZC5ycwAAAMwmEAAxAAAAGgAAAAkAAAACAAAAlwAAAAgAAAAEAAAAmAAAAGxpYnJhcnkvc3RkL3NyYy9zeXNfY29tbW9uL3RocmVhZF9wYXJrZXIvZ2VuZXJpYy5ycwAkJxAAMwAAACcAAAAVAAAAaW5jb25zaXN0ZW50IHBhcmsgc3RhdGUAaCcQABcAAAAkJxAAMwAAADUAAAAXAAAAcGFyayBzdGF0ZSBjaGFuZ2VkIHVuZXhwZWN0ZWRseQCYJxAAHwAAACQnEAAzAAAAMgAAABEAAABpbmNvbnNpc3RlbnQgc3RhdGUgaW4gdW5wYXJr0CcQABwAAAAkJxAAMwAAAGwAAAASAAAAJCcQADMAAAB6AAAADgAAAA4AAAAQAAAAFgAAABUAAAALAAAAFgAAAA0AAAALAAAAEwAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABEAAAASAAAAEAAAABAAAAATAAAAEgAAAA0AAAAOAAAAFQAAAAwAAAALAAAAFQAAABUAAAAPAAAADgAAABMAAAAmAAAAOAAAABkAAAAXAAAADAAAAAkAAAAKAAAAEAAAABcAAAAZAAAADgAAAA0AAAAUAAAACAAAABsAAADCIRAAsiEQAJwhEAAcOxAAkSEQAHshEABuIRAAYyEQAFAhEACsOhAArDoQAKw6EACsOhAArDoQAKw6EACsOhAArDoQAKw6EACsOhAArDoQAKw6EACsOhAArDoQAKw6EACsOhAArDoQAKw6EACsOhAArDoQAKw6EACsOhAArDoQAKw6EAB0OhAAVDsQADw7EACwIxAAnSMQAHA7EACQIxAAgiMQAG0jEABhIxAAViMQAEEjEAAsIxAAHSMQAA8jEADwORAA6SIQALEiEACYIhAAgSIQAHUiEABsIhAAYiIQAFIiEAA7IhAAIiIQABQiEAAHIhAA8yEQAOshEADQIRAAYWxyZWFkeSBib3Jyb3dlZHgAAAAEAAAABAAAAJkAAAB4AAAABAAAAAQAAACaAAAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdEpzVmFsdWUoAACuKhAACAAAAJ+HEAABAAAAeAAAAAAAAAABAAAAkgAAAFVuYWJsZSB0byBjYWxsIHRoZSBTeW1ib2woKSBmdW5jdGlvblVuYWJsZSB0byBjb252ZXJ0IHRoZSByZXR1cm4gdmFsdWUgb2YgU3ltYm9sKCkgaW50byBhIHN5bWJvbFJlc291cmNleAAAAAQAAAAEAAAAIAAAAFdhc214AAAABAAAAAQAAACbAAAASW5zdWZmaWNpZW50IHJlc291cmNlczogZCsQABgAAABUeXBlTWlzbWF0Y2h4AAAABAAAAAQAAACcAAAAVW5zdXBwb3J0ZWRJbnZhbGlkV2ViQXNzZW1ibHkAAAB4AAAABAAAAAQAAACTAAAAIGRvZXNuJ3QgbWF0Y2gganMgdmFsdWUgdHlwZSAAAACoihAAAAAAANArEAAdAAAAVW5zdXBwb3J0ZWQgZmVhdHVyZTogAAAAACwQABUAAABJbnZhbGlkIGlucHV0IFdlYkFzc2VtYmx5IGNvZGUgYXQgb2Zmc2V0IAAAACAsEAApAAAAqG0QAAIAAABJbXBvcnQAAHgAAAAEAAAABAAAAJ0AAABFcnJvciB3aGlsZSBpbXBvcnRpbmcgAAB0LBAAFgAAAB5lEAABAAAAqG0QAAIAAABOb3RJbkV4cG9ydHNEaWZmZXJlbnRTdG9yZXNDcHVGZWF0dXJlU3RhcnQAAHgAAAAEAAAABAAAAJ4AAABMaW5reAAAAAQAAAAEAAAAnwAAAENhbid0IGdldCAgZnJvbSB0aGUgaW5zdGFuY2UgZXhwb3J0c/QsEAAKAAAA/iwQABoAAABjYW5ub3QgbWl4IGltcG9ydHMgZnJvbSBkaWZmZXJlbnQgc3RvcmVzKC0QACgAAABtaXNzaW5nIHJlcXVpcmVkIENQVSBmZWF0dXJlczogAFgtEAAfAAAAL2hvbWUvY29uc3VsdGluZy8uY2FyZ28vcmVnaXN0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dCBiZSBmb3VuZAAArDsQABoAAABhZGRyZXNzIGlzIGluIHVzZQAAANA7EAARAAAAaW8gZXJyb3LsOxAACAAAAGxvY2sgZXJyb3IAAPw7EAAKAAAAZmlsZSBleGlzdHMAEDwQAAsAAABpbnZhbGlkIGZkAAAkPBAACgAAAGZkIG5vdCBhIGZpbGUAAAA4PBAADQAAAGZkIG5vdCBhIGRpcmVjdG9yeQAAUDwQABIAAABVbmtub3duRXJyb3JEaXJlY3RvcnlOb3RFbXB0eVdyaXRlWmVyb1dvdWxkQmxvY2tVbmV4cGVjdGVkRW9mVGltZWRPdXRQZXJtaXNzaW9uRGVuaWVkTm9EZXZpY2VFbnRpdHlOb3RGb3VuZE5vdENvbm5lY3RlZEludmFsaWRJbnB1dEludmFsaWREYXRhSW50ZXJydXB0ZWRDb25uZWN0aW9uUmVzZXRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25BYm9ydGVkQnJva2VuUGlwZUFkZHJlc3NOb3RBdmFpbGFibGVBZGRyZXNzSW5Vc2VJT0Vycm9yTG9ja0FscmVhZHlFeGlzdHNJbnZhbGlkRmROb3RBRmlsZUJhc2VOb3REaXJlY3RvcnkrPxAASwAAACABAAAbAAAAKz8QAEsAAAAoAQAAEQAAACs/EABLAAAAJgEAABYAAAArPxAASwAAAPIAAAANAAAAL2hvbWUvY29uc3VsdGluZy8uY2FyZ28vZ2l0L2NoZWNrb3V0cy93YXNtZXItZjExZjMwZTYyNzM5YWEyOS9lY2RlMmFhL2xpYi92ZnMvc3JjL21lbV9mcy9zdGRpby5ycwAAANg9EABhAAAAtQAAAAEAAABTdGRpbmJ1ZngAAAAEAAAABAAAAMAAAABjYW5ub3Qgc2VlayBgU3RkaW5gY2Fubm90IHdyaXRlIHRvIGBTdGRpbmBjYW5ub3QgZmx1c2ggYFN0ZGluYAAA2D0QAGEAAAC5AAAAAQAAAFN0ZG91dGNhbm5vdCBzZWVrIGBTdGRvdXRgY2Fubm90IHJlYWQgZnJvbSBgU3Rkb3V0YADYPRAAYQAAAL0AAAABAAAAU3RkZXJyY2Fubm90IHNlZWsgYFN0ZGVycmBjYW5ub3QgcmVhZCBmcm9tIGBTdGRlcnJgL3J1c3RjLzI1ODViY2VhMGJjMmE5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AAAAAAEAAABmAQAAoAAAAAQAAAAEAAAAoQAAAHgAAAAEAAAABAAAAGcBAABIYxAAZAAAAC8AAAAOAAAAYnl0ZUxlbmd0aC9ob21lL2NvbnN1bHRpbmcvLmNhcmdvL2dpdC9jaGVja291dHMvd2FzbWVyLWYxMWYzMGU2MjczOWFhMjkvZWNkZTJhYS9saWIvYXBpL3NyYy9qcy9leHRlcm5hbHMvbWVtb3J5X3ZpZXcucnMAKl8QAG0AAAAlAAAADgAAACpfEABtAAAAJwAAAA4AAAB4AAAABAAAAAQAAABoAQAAZmlsZXR5cGVzcmMvZnMucnNhY2Nlc3NlZGNyZWF0ZWRtb2RpZmllZGZpbGVzeW1saW5rcGF0aG1ldGFkYXRhANBfEAAJAAAANgAAADgAAABNZW1GU2lubmVyAAB4AAAABAAAAAQAAABpAQAARXJyb3Igd2hlbiByZWFkaW5nIHRoZSBkaXI6IDRgEAAcAAAA6XAQAAEAAABFcnJvciB3aGVuIGNyZWF0aW5nIHRoZSBkaXI6IAAAAGBgEAAdAAAA6XAQAAEAAABFcnJvciB3aGVuIHJlbW92aW5nIHRoZSBkaXI6IAAAAJBgEAAdAAAA6XAQAAEAAABFcnJvciB3aGVuIHJlbW92aW5nIHRoZSBmaWxlOiAAAMBgEAAeAAAA6XAQAAEAAABFcnJvciB3aGVuIHJlbmFtaW5nOiAAAADwYBAAFQAAAOlwEAABAAAAcmVhZHdyaXRlYXBwZW5kdHJ1bmNhdGVjcmVhdGVjcmVhdGVfbmV3RXJyb3Igd2hlbiBvcGVuaW5nIHRoZSBmaWxlOiA/YRAAHQAAAOlwEAABAAAARXJyb3Igd2hlbiBzZXR0aW5nIHRoZSBmaWxlIGxlbmd0aDogbGEQACQAAADpcBAAAQAAAEVycm9yIHdoZW4gcmVhZGluZzogoGEQABQAAADpcBAAAQAAAENvdWxkIG5vdCBjb252ZXJ0IHRoZSBieXRlcyB0byBhIFN0cmluZzogAAAAxGEQACkAAADpcBAAAQAAAEVycm9yIHdoZW4gd3JpdGluZzogAGIQABQAAADpcBAAAQAAAEVycm9yIHdoZW4gd3JpdGluZyBzdHJpbmc6IAAkYhAAGwAAAOlwEAABAAAARXJyb3Igd2hlbiBmbHVzaGluZzogAAAAUGIQABUAAADpcBAAAQAAAEVycm9yIHdoZW4gc2Vla2luZzogeGIQABQAAADpcBAAAQAAAC9ob21lL2NvbnN1bHRpbmcvLmNhcmdvL2dpdC9jaGVja291dHMvd2FzbWVyLWYxMWYzMGU2MjczOWFhMjkvZWNkZTJhYS9saWIvd2FzaS9zcmMvc3RhdGUvc29ja2V0LnJzAACcYhAAYgAAAHUDAAAvAAAAnGIQAGIAAAD9AgAAKwAAAHgAAAAEAAAABAAAAHsAAABqAQAAawEAAGwBAABtAQAAbgEAAG8BAAAvaG9tZS9jb25zdWx0aW5nLy5jYXJnby9naXQvY2hlY2tvdXRzL3dhc21lci1mMTFmMzBlNjI3MzlhYTI5L2VjZGUyYWEvbGliL2FwaS9zcmMvanMvZnVuY3Rpb25fZW52LnJzSGMQAGQAAAA7AAAADgAAAHABAABwAAAACAAAAHEBAAByAQAAQAAAAAQAAABHAAAAcgEAAEAAAAAEAAAARQAAAEcAAADMYxAAcwEAAHQBAAB1AQAAdgEAALsAAAB1bmtub3duTWVtb3J5RXh0ZXJuIHR5cGUgZG9lc24ndCBtYXRjaCBqcyB2YWx1ZSB0eXBlL2hvbWUvY29uc3VsdGluZy8uY2FyZ28vZ2l0L2NoZWNrb3V0cy93YXNtZXItZjExZjMwZTYyNzM5YWEyOS9lY2RlMmFhL2xpYi9hcGkvc3JjL2pzL2V4dGVybmFscy9tb2QucnMAAAA8ZBAAZQAAAHsAAAAVAAAAPGQQAGUAAABnAAAAFQAAADxkEABlAAAAcQAAABUAAAB3AQAABAAAAAQAAAB4AQAAeQEAAAQAAAAEAAAAegEAAHsBAAAMAAAABAAAAHwBAABhcmdzc3JjL3dhc2kucnNlbnZwcmVvcGVucy5mcwAAAHkBAAAEAAAABAAAAHkBAAAEAAAABAAAAH0BAAB+AQAAfwEAAHkBAAAEAAAABAAAAIABAAAkZRAAJGUQAH0BAAB+AQAAfwEAADBlEACBAQAAggEAAIMBAACEAQAAhQEAAIUBAACGAQAAhwEAAHcBAAAEAAAABAAAAIgBAACJAQAAxwAAAMgAAACKAQAAiwEAAIwBAAB3AQAABAAAAAQAAACNAQAAjgEAAMcAAACPAQAAkAEAAJEBAACSAQAAkwEAAHcBAAAEAAAABAAAAJQBAACVAQAAlgEAAJcBAAB3AQAABAAAAAQAAACYAQAAmQEAAJoBAAB3AQAABAAAAAQAAACbAQAAiAEAAIkBAADHAAAAyAAAAIoBAACLAQAAjAEAAJBlEACNAQAAjgEAAMcAAACPAQAAkAEAAJEBAACSAQAAkwEAALhlEACUAQAAlQEAAJYBAACXAQAA5GUQAJgBAACZAQAAmgEAAABmEAALAQAACwEAAAsBAACcAQAAnQEAAA0BAADhAAAAngEAAJ8BAADjAAAA5AAAALgAAABDb3VsZG4ndCBwcmVvcGVuIHRoZSBkaXI6IAAAwGYQABoAAADpcBAAAQAAAEZhaWxlZCB0byBjcmVhdGUgdGhlIFdhc2lTdGF0ZTog7GYQACAAAADpcBAAAQAAAEZhaWxlZCB0byBkb3duY2FzdCB0byBNZW1GU1lvdSBtdXN0IHByb3ZpZGUgYSBtb2R1bGUgdG8gdGhlIFdBU0kgbmV3LiBgbGV0IG1vZHVsZSA9IG5ldyBXQVNJKHt9LCBtb2R1bGUpO2BGYWlsZWQgdG8gY3JlYXRlIHRoZSBJbXBvcnQgT2JqZWN0OiAAAIZnEAAkAAAA6XAQAAEAAABXaGVuIHByb3ZpZGluZyBhbiBpbnN0YW5jZSwgdGhlIGB3YXNpLmdldEltcG9ydHNgIG11c3QgYmUgY2FsbGVkIHdpdGggdGhlIG1vZHVsZSBmaXJzdG1lbW9yeQhlEAALAAAA4QAAAD8AAABZb3UgbmVlZCB0byBwcm92aWRlIGEgYFdlYkFzc2VtYmx5Lk1vZHVsZWAgb3IgYFdlYkFzc2VtYmx5Lkluc3RhbmNlYCBhcyBmaXJzdCBhcmd1bWVudCB0byBgd2FzaS5pbnN0YW50aWF0ZWBGYWlsZWQgdG8gZ2V0IHVzZXIgaW1wb3J0czoglGgQABwAAABGYWlsZWQgdG8gaW5zdGFudGlhdGUgV0FTSToguGgQABwAAADpcBAAAQAAAENhbid0IGdldCB0aGUgV2FzbWVyIEluc3RhbmNlOiAA5GgQAB8AAABZb3UgbmVlZCB0byBwcm92aWRlIGFuIGluc3RhbmNlIGFzIGFyZ3VtZW50IHRvIGBzdGFydGAsIG9yIGNhbGwgYHdhc2kuaW5zdGFudGlhdGVgIHdpdGggdGhlIGBXZWJBc3NlbWJseS5JbnN0YW5jZWAgbWFudWFsbHkACGUQAAsAAAD4AAAADgAAAF9zdGFydEVycm9yIHdoaWxlIHJ1bm5pbmcgc3RhcnQgZnVuY3Rpb246IAAAnmkQACQAAABVbmV4cGVjdGVkIFdBU0kgZXJyb3Igd2hpbGUgcnVubmluZyBzdGFydCBmdW5jdGlvbjogzGkQADQAAABUaGUgX3N0YXJ0IGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50Q291bGQgbm90IGdldCB0aGUgc3Rkb3V0IGJ5dGVzOiAAACpqEAAgAAAA6XAQAAEAAABDb3VsZCBub3QgY29udmVydCB0aGUgc3Rkb3V0IGJ5dGVzIHRvIGEgU3RyaW5nOiBcahAAMAAAAOlwEAABAAAAQ291bGQgbm90IGdldCB0aGUgc3RkZXJyIGJ5dGVzOiCcahAAIAAAAOlwEAABAAAAQ291bGQgbm90IGNvbnZlcnQgdGhlIHN0ZGVyciBieXRlcyB0byBhIFN0cmluZzogzGoQADAAAADpcBAAAQAAAEVycm9yIHdyaXRpbmcgc3RkaW46IAAAAAxrEAAVAAAA6XAQAAEAAACgAQAACAAAAAQAAAChAQAAL2hvbWUvY29uc3VsdGluZy8uY2FyZ28vZ2l0L2NoZWNrb3V0cy93YXNtZXItZjExZjMwZTYyNzM5YWEyOS9lY2RlMmFhL2xpYi9hcGkvc3JjL2pzL3RyYXAucnNEaxAAXAAAAM4AAABbAAAAb2JqZWN0IHVzZWQgd2l0aCB0aGUgd3JvbmcgY29udGV4dAAAsGsQACIAAAAvaG9tZS9jb25zdWx0aW5nLy5jYXJnby9naXQvY2hlY2tvdXRzL3dhc21lci1mMTFmMzBlNjI3MzlhYTI5L2VjZGUyYWEvbGliL2FwaS9zcmMvanMvc3RvcmUucnMAAADcaxAAXQAAAFYBAAANAAAA3GsQAF0AAABcAQAADQAAANxrEABdAAAAoQEAAA4AAADcaxAAXQAAAJcBAAA5AAAA3GsQAF0AAACmAQAAEgAAAAAAAAD//////////y9ob21lL2NvbnN1bHRpbmcvLmNhcmdvL2dpdC9jaGVja291dHMvd2FzbWVyLWYxMWYzMGU2MjczOWFhMjkvZWNkZTJhYS9saWIvd2FzaS9zcmMvc3RhdGUvcGlwZS5yc5hsEABgAAAAOgAAACUAAACYbBAAYAAAAE0AAAAhAAAAL2hvbWUvY29uc3VsdGluZy8uY2FyZ28vZ2l0L2NoZWNrb3V0cy93YXNtZXItZjExZjMwZTYyNzM5YWEyOS9lY2RlMmFhL2xpYi93YXNpL3NyYy9zeXNjYWxscy9tb2QucnMAABhtEABiAAAAQQUAACYAAAAYbRAAYgAAAEIFAAA2AAAALwAAAJxtEAABAAAAOiAAAKiKEAAAAAAAqG0QAAIAAAA0dxAASQAAAFMBAAAYAAAAc3RyZWFtIGRpZCBub3QgY29udGFpbiB2YWxpZCBVVEYtOAAAzG0QACIAAAAVAAAANHcQAEkAAADHAQAAHAAAAGZhaWxlZCB0byBmaWxsIHdob2xlIGJ1ZmZlcgAMbhAAGwAAACUAAAA0dxAASQAAAIcBAAAbAAAANHcQAEkAAACWAQAAMAAAAC9ydXN0Yy8yNTg1YmNlYTBiYzJhOWM0MmE0YmUyYzFlYmE1YzYxMTM3ZjJiMTY3L2xpYnJhcnkvc3RkL3NyYy9pby9yZWFkYnVmLnJzAAAAVG4QAE0AAAD9AAAAFgAAAFRuEABNAAAA0wAAADUAAABUbhAATQAAAMsAAAA2AAAAY2Fubm90IHJlY3Vyc2l2ZWx5IGFjcXVpcmUgbXV0ZXjUbhAAIAAAAC9ydXN0Yy8yNTg1YmNlYTBiYzJhOWM0MmE0YmUyYzFlYmE1YzYxMTM3ZjJiMTY3L2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9sb2Nrcy9tdXRleC5ycwAA/G4QAGYAAAAUAAAACQAAAAovcnVzdGMvMjU4NWJjZWEwYmMyYTljNDJhNGJlMmMxZWJhNWM2MTEzN2YyYjE2Ny9saWJyYXJ5L3N0ZC9zcmMvc3luYy9tcG1jL21vZC5ycwAAAHVvEABQAAAAhQAAAC0AAAB4AAAABAAAAAQAAACiAQAAowEAAKQBAAClAQAACAAAAAQAAAB7AAAApQEAAAgAAAAEAAAAewAAAHwAAAAIAAAABAAAAHsAAAB4AAAABAAAAAQAAACmAQAAY2Fubm90IGFkdmFuY2UgcGFzdCBgcmVtYWluaW5nYDogIDw9IAAAADBwEAAhAAAAUXAQAAQAAAAvaG9tZS9jb25zdWx0aW5n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AAC8AAAADAAAAAQAAACpAQAAqgEAAKsBAABmb3JtYXR0ZXIgZXJyb3IAqHcQAA8AAAAoAAAANHcQAEkAAAAkBQAAFgAAADR3EABJAAAAKAUAAA0AAABhZHZhbmNpbmcgaW8gc2xpY2VzIGJleW9uZCB0aGVpciBsZW5ndGgA5HcQACcAAAA0dxAASQAAACYFAAANAAAAoAAAAAQAAAAEAAAAoQAAAEVycm9yIHdoaWxlIHNldHRpbmcgaW50byB0aGUganMgbmFtZXNwYWNlIG9iamVjdC9ob21lL2NvbnN1bHRpbmcvLmNhcmdvL2dpdC9jaGVja291dHMvd2FzbWVyLWYxMWYzMGU2MjczOWFhMjkvZWNkZTJhYS9saWIvYXBpL3NyYy9qcy9pbXBvcnRzLnJzAGR4EABfAAAAsAAAABYAAABFcnJvciB3aGlsZSBzZXR0aW5nIGludG8gdGhlIGpzIGltcG9ydHMgb2JqZWN0AABkeBAAXwAAALMAAAASAAAAZHgQAF8AAADZAAAAPwAAAGR4EABfAAAA3QAAAEMAAABkeBAAXwAAAOAAAAA8AAAAZHgQAF8AAADvAAAAUAAAAGR4EABfAAAA9wAAABIAAABkeBAAXwAAAAABAAASAAAAZHgQAF8AAAACAQAAFgAAAABQb2lzb25FcnJvcgAAAAEBAAAAAAEAAAAAAAABAAAAAQEAL2hvbWUvY29uc3VsdGluZy8uY2FyZ28vZ2l0L2NoZWNrb3V0cy93YXNtZXItZjExZjMwZTYyNzM5YWEyOS9lY2RlMmFhL2xpYi93YXNpL3NyYy9saWIucnNhcmdzX2dldGFyZ3Nfc2l6ZXNfZ2V0Y2xvY2tfcmVzX2dldGNsb2NrX3RpbWVfZ2V0ZW52aXJvbl9nZXRlbnZpcm9uX3NpemVzX2dldGZkX2FkdmlzZWZkX2FsbG9jYXRlZmRfY2xvc2VmZF9kYXRhc3luY2ZkX2Zkc3RhdF9nZXRmZF9mZHN0YXRfc2V0X2ZsYWdzZmRfZmRzdGF0X3NldF9yaWdodHNmZF9maWxlc3RhdF9nZXRmZF9maWxlc3RhdF9zZXRfc2l6ZWZkX2ZpbGVzdGF0X3NldF90aW1lc2ZkX3ByZWFkZmRfcHJlc3RhdF9nZXRmZF9wcmVzdGF0X2Rpcl9uYW1lZmRfcHdyaXRlZmRfcmVhZGZkX3JlYWRkaXJmZF9yZW51bWJlcmZkX3NlZWtmZF9zeW5jZmRfdGVsbGZkX3dyaXRlcGF0aF9jcmVhdGVfZGlyZWN0b3J5cGF0aF9maWxlc3RhdF9nZXRwYXRoX2ZpbGVzdGF0X3NldF90aW1lc3BhdGhfbGlua3BhdGhfb3BlbnBhdGhfcmVhZGxpbmtwYXRoX3JlbW92ZV9kaXJlY3RvcnlwYXRoX3JlbmFtZXBhdGhfc3ltbGlua3BhdGhfdW5saW5rX2ZpbGVwb2xsX29uZW9mZnByb2NfZXhpdHByb2NfcmFpc2VyYW5kb21fZ2V0c2NoZWRfeWllbGRzb2NrX3JlY3Zzb2NrX3NlbmRzb2NrX3NodXRkb3dubm90IGltcGxlbWVudGVkp3kQAFkAAAC4AQAADgAAAHdhc2lfdW5zdGFibGV3YXNpX3NuYXBzaG90X3ByZXZpZXcxY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZS9ydXN0Yy8yNTg1YmNlYTBiYzJhOWM0MmE0YmUyYzFlYmE1YzYxMTM3ZjJiMTY3L2xpYnJhcnkvc3RkL3NyYy9zeW5jL21wbWMvYXJyYXkucnOifBAAUgAAAGcBAAAZAAAAaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZaJ8EABSAAAAZQEAACoAAAAvcnVzdGMvMjU4NWJjZWEwYmMyYTljNDJhNGJlMmMxZWJhNWM2MTEzN2YyYjE2Ny9saWJyYXJ5L3N0ZC9zcmMvc3luYy9tcG1jL3dha2VyLnJzAAA8fRAAUgAAAFgAAAAnAAAAPH0QAFIAAAA7AAAAKAAAAGNhbGxlZCBgUmVzdWx0Ojp1bndyYXAoKWAgb24gYW4gYEVycmAgdmFsdWUAfQAAAAgAAAAEAAAAewAAADx9EABSAAAAnQAAABkAAAA8fRAAUgAAAKgAAAAdAAAAPH0QAFIAAACUAAAAGQAAAC9ydXN0Yy8yNTg1YmNlYTBiYzJhOWM0MmE0YmUyYzFlYmE1YzYxMTM3ZjJiMTY3L2xpYnJhcnkvc3RkL3NyYy9zeW5jL21wbWMvY29udGV4dC5ycxx+EABUAAAAMQAAABUAAABkZXNjcmlwdGlvbigpIGlzIGRlcHJlY2F0ZWQ7IHVzZSBEaXNwbGF5bm90Y2FwYWJsZXhkZXZ0eHRic3l0aW1lZG91dHN0YWxlc3JjaHNwaXBlcm9mc3JhbmdlcHJvdG90eXBlcHJvdG9ub3N1cHBvcnRwcm90b3BpcGVwZXJtb3duZXJkZWFkb3ZlcmZsb3dueGlvbm90dHlub3RzdXBub3Rzb2Nrbm90cmVjb3ZlcmFibGVub3RlbXB0eW5vdGRpcm5vdGNvbm5ub3N5c25vc3Bjbm9wcm90b29wdG5vbXNnbm9tZW1ub2xpbmtub2xja25vZXhlY25vZW50bm9kZXZub2J1ZnNuZmlsZW5ldHVucmVhY2huZXRyZXNldG5ldGRvd25uYW1ldG9vbG9uZ211bHRpaG9wbXNnc2l6ZW1saW5rbWZpbGVsb29waXNkaXJpc2Nvbm5pb2ludmFsaW50cmlucHJvZ3Jlc3NpbHNlcWlkcm1ob3N0dW5yZWFjaGZiaWdmYXVsdGV4aXN0ZHF1b3Rkb21kZXN0YWRkcnJlcWRlYWRsa2Nvbm5yZXNldGNvbm5yZWZ1c2VkY29ubmFib3J0ZWRjaGlsZGNhbmNlbGVkYnVzeWJhZG1zZ2JhZGZhbHJlYWR5YWdhaW5hZm5vc3VwcG9ydGFkZHJub3RhdmFpbGFkZHJpbnVzZWFjY2Vzc3Rvb2JpZ3N1Y2Nlc3NFeHRlbnNpb246IENhcGFiaWxpdGllcyBpbnN1ZmZpY2llbnQuQ3Jvc3MtZGV2aWNlIGxpbmsuVGV4dCBmaWxlIGJ1c3kuQ29ubmVjdGlvbiB0aW1lZCBvdXQuUmVzZXJ2ZWQuTm8gc3VjaCBwcm9jZXNzLkludmFsaWQgc2Vlay5SZWFkLW9ubHkgZmlsZSBzeXN0ZW0uUmVzdWx0IHRvbyBsYXJnZS5Qcm90b2NvbCB3cm9uZyB0eXBlIGZvciBzb2NrZXQuUHJvdG9jb2wgbm90IHN1cHBvcnRlZC5Qcm90b2NvbCBlcnJvci5Ccm9rZW4gcGlwZS5PcGVyYXRpb24gbm90IHBlcm1pdHRlZC5QcmV2aW91cyBvd25lciBkaWVkLlZhbHVlIHRvbyBsYXJnZSB0byBiZSBzdG9yZWQgaW4gZGF0YSB0eXBlLk5vIHN1Y2ggZGV2aWNlIG9yIGFkZHJlc3MuSW5hcHByb3ByaWF0ZSBJL08gY29udHJvbCBvcGVyYXRpb24uTm90IHN1cHBvcnRlZCwgb3Igb3BlcmF0aW9uIG5vdCBzdXBwb3J0ZWQgb24gc29ja2V0Lk5vdCBhIHNvY2tldC5TdGF0ZSBub3QgcmVjb3ZlcmFibGUuRGlyZWN0b3J5IG5vdCBlbXB0eS5Ob3QgYSBkaXJlY3Rvcnkgb3IgYSBzeW1ib2xpYyBsaW5rIHRvIGEgZGlyZWN0b3J5LlRoZSBzb2NrZXQgaXMgbm90IGNvbm5lY3RlZC5GdW5jdGlvbiBub3Qgc3VwcG9ydGVkLk5vIHNwYWNlIGxlZnQgb24gZGV2aWNlLlByb3RvY29sIG5vdCBhdmFpbGFibGUuTm8gbWVzc2FnZSBvZiB0aGUgZGVzaXJlZCB0eXBlLk5vdCBlbm91Z2ggc3BhY2UuTm8gbG9ja3MgYXZhaWxhYmxlLkV4ZWN1dGFibGUgZmlsZSBmb3JtYXQgZXJyb3IuTm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeS5ObyBzdWNoIGRldmljZS5ObyBidWZmZXIgc3BhY2UgYXZhaWxhYmxlLlRvbyBtYW55IGZpbGVzIG9wZW4gaW4gc3lzdGVtLk5ldHdvcmsgdW5yZWFjaGFibGUuQ29ubmVjdGlvbiBhYm9ydGVkIGJ5IG5ldHdvcmsuTmV0d29yayBpcyBkb3duLkZpbGVuYW1lIHRvbyBsb25nLk1lc3NhZ2UgdG9vIGxhcmdlLlRvbyBtYW55IGxpbmtzLkZpbGUgZGVzY3JpcHRvciB2YWx1ZSB0b28gbGFyZ2UuVG9vIG1hbnkgbGV2ZWxzIG9mIHN5bWJvbGljIGxpbmtzLklzIGEgZGlyZWN0b3J5LlNvY2tldCBpcyBjb25uZWN0ZWQuSS9PIGVycm9yLkludmFsaWQgYXJndW1lbnQuSW50ZXJydXB0ZWQgZnVuY3Rpb24uT3BlcmF0aW9uIGluIHByb2dyZXNzLklsbGVnYWwgYnl0ZSBzZXF1ZW5jZS5JZGVudGlmaWVyIHJlbW92ZWQuSG9zdCBpcyB1bnJlYWNoYWJsZS5GaWxlIHRvbyBsYXJnZS5CYWQgYWRkcmVzcy5GaWxlIGV4aXN0cy5NYXRoZW1hdGljcyBhcmd1bWVudCBvdXQgb2YgZG9tYWluIG9mIGZ1bmN0aW9uLkRlc3RpbmF0aW9uIGFkZHJlc3MgcmVxdWlyZWQuUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIuQ29ubmVjdGlvbiByZXNldC5Db25uZWN0aW9uIHJlZnVzZWQuQ29ubmVjdGlvbiBhYm9ydGVkLk5vIGNoaWxkIHByb2Nlc3Nlcy5PcGVyYXRpb24gY2FuY2VsZWQuRGV2aWNlIG9yIHJlc291cmNlIGJ1c3kuQmFkIG1lc3NhZ2UuQmFkIGZpbGUgZGVzY3JpcHRvci5Db25uZWN0aW9uIGFscmVhZHkgaW4gcHJvZ3Jlc3MuUmVzb3VyY2UgdW5hdmFpbGFibGUsIG9yIG9wZXJhdGlvbiB3b3VsZCBibG9jay5BZGRyZXNzIGZhbWlseSBub3Qgc3VwcG9ydGVkLkFkZHJlc3Mgbm90IGF2YWlsYWJsZS5BZGRyZXNzIGluIHVzZS5QZXJtaXNzaW9uIGRlbmllZC5Bcmd1bWVudCBsaXN0IHRvbyBsb25nLk5vIGVycm9yIG9jY3VycmVkLiBTeXN0ZW0gY2FsbCBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LkVycm5vY29kZQAAeAAAAAQAAAAEAAAArAEAAG5hbWV4AAAACAAAAAQAAACtAQAAbWVzc2FnZSAoZXJyb3IgKaiKEAAAAAAAl4cQAAgAAACfhxAAAQAAAGRhdGFkaXJub3QgeWV0IGltcGxlbWVudGVkOiC/hxAAFQAAAGNvdWxkIG5vdCBzZXJpYWxpemUgbnVtYmVyICB0byBlbnVtIFNuYXBzaG90MENsb2NraWTchxAAGwAAAPeHEAAZAAAAL2hvbWUvY29uc3VsdGluZy8uY2FyZ28vZ2l0L2NoZWNrb3V0cy93YXNtZXItZjExZjMwZTYyNzM5YWEyOS9lY2RlMmFhL2xpYi93YXNpLXR5cGVzL3NyYy93YXNpL2V4dHJhLnJzAAAgiBAAZgAAAIoKAAASAAAAIHRvIGVudW0gQWR2aWNlANyHEAAbAAAAmIgQAA8AAAAgiBAAZgAAAIsLAAASAAAAIHRvIGVudW0gU25hcHNob3QwV2hlbmNl3IcQABsAAADIiBAAGAAAACCIEABmAAAA/QwAABIAAAAgdG8gZW51bSBXaGVuY2UA3IcQABsAAAAAiRAADwAAACCIEABmAAAAGQ0AABIAAAAgdG8gZW51bSBTaWduYWwA3IcQABsAAAAwiRAADwAAACCIEABmAAAATA8AABIAAABub3QgaW1wbGVtZW50ZWQgZm9yIG5vdwBgiRAAFwAAAC9ob21lL2NvbnN1bHRpbmcvLmNhcmdvL2dpdC9jaGVja291dHMvd2FzbWVyLWYxMWYzMGU2MjczOWFhMjkvZWNkZTJhYS9saWIvd2FzaS10eXBlcy9zcmMvd2FzaS9leHRyYV9tYW51YWwucnMAAACAiRAAbQAAAGkAAAAyAAAAgIkQAG0AAABoAAAAMwAAADB4AAAYAAAAL2hvbWUvY29uc3VsdGluZy8uY2FyZ28vZ2l0L2NoZWNrb3V0cy93YXNtZXItZjExZjMwZTYyNzM5YWEyOS9lY2RlMmFhL2xpYi93YXNpLXR5cGVzL3NyYy90eXBlcy5ycwAAABiKEABhAAAAcwAAAAkAAABjYXBhY2l0eSBvdmVyZmxvdwAAAIyKEAARAAAAL3J1c3RjLzI1ODViY2VhMGJjMmE5YzQyYTRiZTJjMWViYTVjNjExMzdmMmIxNjcvbGlicmFyeS9hbGxvYy9zcmMvdmVjL3NwZWNfZnJvbV9pdGVyX25lc3RlZC5ycwAAqIoQAF4AAAA7AAAAEgAAAC9ydXN0Yy8yNTg1YmNlYTBiYzJhOWM0MmE0YmUyYzFlYmE1YzYxMTM3ZjJiMTY3L2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnMYixAATAAAAE0LAAANAAAAAAAAAAMAAAABAAAAAgAAABASCgsYGAkPBgcYCAMVGBgYGBgYDg0TFhgYGBgYGBgYGBgYDBgUGAUIFB0dAwRADQ4PGx0cNSs/SUEGMzodNhwIFB0dAwRADQ4PGx0cNSwrP0lBBjM3HQAAAAAAkwAgCAAAAADRACAIAAAAANEAIAgAAAAA/////38AQZiYwgALBf////9/AEGgmMIACwEDAEGwmMIACwEBAEHEmMIACwGnAEHUmMIACwGn"))];case 1:g=A.sent(),A.label=2;case 2:b=d(g),A.label=3;case 3:return [4,b];case 4:return A.sent(),[2]}}))}))};
  
    let DATA_VIEW = new DataView(new ArrayBuffer());
  
    function data_view(mem) {
      if (DATA_VIEW.buffer !== mem.buffer) DATA_VIEW = new DataView(mem.buffer);
      return DATA_VIEW;
    }
  
    function to_uint32(val) {
      return val >>> 0;
    }
    const UTF8_DECODER = new TextDecoder('utf-8');
  
    const UTF8_ENCODER = new TextEncoder('utf-8');
  
    function utf8_encode(s, realloc, memory) {
      if (typeof s !== 'string') throw new TypeError('expected a string');
      
      if (s.length === 0) {
        UTF8_ENCODED_LEN = 0;
        return 1;
      }
      
      let alloc_len = 0;
      let ptr = 0;
      let writtenTotal = 0;
      while (s.length > 0) {
        ptr = realloc(ptr, alloc_len, 1, alloc_len + s.length);
        alloc_len += s.length;
        const { read, written } = UTF8_ENCODER.encodeInto(
        s,
        new Uint8Array(memory.buffer, ptr + writtenTotal, alloc_len - writtenTotal),
        );
        writtenTotal += written;
        s = s.slice(read);
      }
      if (alloc_len > writtenTotal)
      ptr = realloc(ptr, alloc_len, 1, writtenTotal);
      UTF8_ENCODED_LEN = writtenTotal;
      return ptr;
    }
    let UTF8_ENCODED_LEN = 0;
  
    class Slab {
      constructor() {
        this.list = [];
        this.head = 0;
      }
      
      insert(val) {
        if (this.head >= this.list.length) {
          this.list.push({
            next: this.list.length + 1,
            val: undefined,
          });
        }
        const ret = this.head;
        const slot = this.list[ret];
        this.head = slot.next;
        slot.next = -1;
        slot.val = val;
        return ret;
      }
      
      get(idx) {
        if (idx >= this.list.length)
        throw new RangeError('handle index not valid');
        const slot = this.list[idx];
        if (slot.next === -1)
        return slot.val;
        throw new RangeError('handle index not valid');
      }
      
      remove(idx) {
        const ret = this.get(idx); // validate the slot
        const slot = this.list[idx];
        slot.val = undefined;
        slot.next = this.head;
        this.head = idx;
        return ret;
      }
    }
  
    function throw_invalid_bool() {
      throw new RangeError("invalid variant discriminant for bool");
    }
  
    class RbAbiGuest {
      constructor() {
        this._resource0_slab = new Slab();
        this._resource1_slab = new Slab();
      }
      addToImports(imports) {
        if (!("canonical_abi" in imports)) imports["canonical_abi"] = {};
        
        imports.canonical_abi['resource_drop_rb-iseq'] = i => {
          this._resource0_slab.remove(i).drop();
        };
        imports.canonical_abi['resource_clone_rb-iseq'] = i => {
          const obj = this._resource0_slab.get(i);
          return this._resource0_slab.insert(obj.clone())
        };
        imports.canonical_abi['resource_get_rb-iseq'] = i => {
          return this._resource0_slab.get(i)._wasm_val;
        };
        imports.canonical_abi['resource_new_rb-iseq'] = i => {
          this._registry0;
          return this._resource0_slab.insert(new RbIseq(i, this));
        };
        
        imports.canonical_abi['resource_drop_rb-abi-value'] = i => {
          this._resource1_slab.remove(i).drop();
        };
        imports.canonical_abi['resource_clone_rb-abi-value'] = i => {
          const obj = this._resource1_slab.get(i);
          return this._resource1_slab.insert(obj.clone())
        };
        imports.canonical_abi['resource_get_rb-abi-value'] = i => {
          return this._resource1_slab.get(i)._wasm_val;
        };
        imports.canonical_abi['resource_new_rb-abi-value'] = i => {
          this._registry1;
          return this._resource1_slab.insert(new RbAbiValue(i, this));
        };
      }
      
      async instantiate(module, imports) {
        imports = imports || {};
        this.addToImports(imports);
        
        if (module instanceof WebAssembly.Instance) {
          this.instance = module;
        } else if (module instanceof WebAssembly.Module) {
          this.instance = await WebAssembly.instantiate(module, imports);
        } else if (module instanceof ArrayBuffer || module instanceof Uint8Array) {
          const { instance } = await WebAssembly.instantiate(module, imports);
          this.instance = instance;
        } else {
          const { instance } = await WebAssembly.instantiateStreaming(module, imports);
          this.instance = instance;
        }
        this._exports = this.instance.exports;
        this._registry0 = new FinalizationRegistry(this._exports['canonical_abi_drop_rb-iseq']);
        this._registry1 = new FinalizationRegistry(this._exports['canonical_abi_drop_rb-abi-value']);
      }
      rubyShowVersion() {
        this._exports['ruby-show-version: func() -> ()']();
      }
      rubyInit() {
        this._exports['ruby-init: func() -> ()']();
      }
      rubySysinit(arg0) {
        const memory = this._exports.memory;
        const realloc = this._exports["cabi_realloc"];
        const vec1 = arg0;
        const len1 = vec1.length;
        const result1 = realloc(0, 0, 4, len1 * 8);
        for (let i = 0; i < vec1.length; i++) {
          const e = vec1[i];
          const base = result1 + i * 8;
          const ptr0 = utf8_encode(e, realloc, memory);
          const len0 = UTF8_ENCODED_LEN;
          data_view(memory).setInt32(base + 4, len0, true);
          data_view(memory).setInt32(base + 0, ptr0, true);
        }
        this._exports['ruby-sysinit: func(args: list<string>) -> ()'](result1, len1);
      }
      rubyOptions(arg0) {
        const memory = this._exports.memory;
        const realloc = this._exports["cabi_realloc"];
        const vec1 = arg0;
        const len1 = vec1.length;
        const result1 = realloc(0, 0, 4, len1 * 8);
        for (let i = 0; i < vec1.length; i++) {
          const e = vec1[i];
          const base = result1 + i * 8;
          const ptr0 = utf8_encode(e, realloc, memory);
          const len0 = UTF8_ENCODED_LEN;
          data_view(memory).setInt32(base + 4, len0, true);
          data_view(memory).setInt32(base + 0, ptr0, true);
        }
        const ret = this._exports['ruby-options: func(args: list<string>) -> handle<rb-iseq>'](result1, len1);
        return this._resource0_slab.remove(ret);
      }
      rubyScript(arg0) {
        const memory = this._exports.memory;
        const realloc = this._exports["cabi_realloc"];
        const ptr0 = utf8_encode(arg0, realloc, memory);
        const len0 = UTF8_ENCODED_LEN;
        this._exports['ruby-script: func(name: string) -> ()'](ptr0, len0);
      }
      rubyInitLoadpath() {
        this._exports['ruby-init-loadpath: func() -> ()']();
      }
      rbEvalStringProtect(arg0) {
        const memory = this._exports.memory;
        const realloc = this._exports["cabi_realloc"];
        const ptr0 = utf8_encode(arg0, realloc, memory);
        const len0 = UTF8_ENCODED_LEN;
        const ret = this._exports['rb-eval-string-protect: func(str: string) -> tuple<handle<rb-abi-value>, s32>'](ptr0, len0);
        return [this._resource1_slab.remove(data_view(memory).getInt32(ret + 0, true)), data_view(memory).getInt32(ret + 4, true)];
      }
      rbFuncallvProtect(arg0, arg1, arg2) {
        const memory = this._exports.memory;
        const realloc = this._exports["cabi_realloc"];
        const obj0 = arg0;
        if (!(obj0 instanceof RbAbiValue)) throw new TypeError('expected instance of RbAbiValue');
        const vec2 = arg2;
        const len2 = vec2.length;
        const result2 = realloc(0, 0, 4, len2 * 4);
        for (let i = 0; i < vec2.length; i++) {
          const e = vec2[i];
          const base = result2 + i * 4;
          const obj1 = e;
          if (!(obj1 instanceof RbAbiValue)) throw new TypeError('expected instance of RbAbiValue');
          data_view(memory).setInt32(base + 0, this._resource1_slab.insert(obj1.clone()), true);
        }
        const ret = this._exports['rb-funcallv-protect: func(recv: handle<rb-abi-value>, mid: u32, args: list<handle<rb-abi-value>>) -> tuple<handle<rb-abi-value>, s32>'](this._resource1_slab.insert(obj0.clone()), to_uint32(arg1), result2, len2);
        return [this._resource1_slab.remove(data_view(memory).getInt32(ret + 0, true)), data_view(memory).getInt32(ret + 4, true)];
      }
      rbIntern(arg0) {
        const memory = this._exports.memory;
        const realloc = this._exports["cabi_realloc"];
        const ptr0 = utf8_encode(arg0, realloc, memory);
        const len0 = UTF8_ENCODED_LEN;
        const ret = this._exports['rb-intern: func(name: string) -> u32'](ptr0, len0);
        return ret >>> 0;
      }
      rbErrinfo() {
        const ret = this._exports['rb-errinfo: func() -> handle<rb-abi-value>']();
        return this._resource1_slab.remove(ret);
      }
      rbClearErrinfo() {
        this._exports['rb-clear-errinfo: func() -> ()']();
      }
      rstringPtr(arg0) {
        const memory = this._exports.memory;
        const obj0 = arg0;
        if (!(obj0 instanceof RbAbiValue)) throw new TypeError('expected instance of RbAbiValue');
        const ret = this._exports['rstring-ptr: func(value: handle<rb-abi-value>) -> string'](this._resource1_slab.insert(obj0.clone()));
        const ptr1 = data_view(memory).getInt32(ret + 0, true);
        const len1 = data_view(memory).getInt32(ret + 4, true);
        const result1 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr1, len1));
        this._exports["cabi_post_rstring-ptr"](ret);
        return result1;
      }
      rbVmBugreport() {
        this._exports['rb-vm-bugreport: func() -> ()']();
      }
      rbGcEnable() {
        const ret = this._exports['rb-gc-enable: func() -> bool']();
        const bool0 = ret;
        return bool0 == 0 ? false : (bool0 == 1 ? true : throw_invalid_bool());
      }
      rbGcDisable() {
        const ret = this._exports['rb-gc-disable: func() -> bool']();
        const bool0 = ret;
        return bool0 == 0 ? false : (bool0 == 1 ? true : throw_invalid_bool());
      }
      rbSetShouldProhibitRewind(arg0) {
        const ret = this._exports['rb-set-should-prohibit-rewind: func(new-value: bool) -> bool'](arg0 ? 1 : 0);
        const bool0 = ret;
        return bool0 == 0 ? false : (bool0 == 1 ? true : throw_invalid_bool());
      }
    }
  
    class RbIseq {
      constructor(wasm_val, obj) {
        this._wasm_val = wasm_val;
        this._obj = obj;
        this._refcnt = 1;
        obj._registry0.register(this, wasm_val, this);
      }
      
      clone() {
        this._refcnt += 1;
        return this;
      }
      
      drop() {
        this._refcnt -= 1;
        if (this._refcnt !== 0)
        return;
        this._obj._registry0.unregister(this);
        const dtor = this._obj._exports['canonical_abi_drop_rb-iseq'];
        const wasm_val = this._wasm_val;
        delete this._obj;
        delete this._refcnt;
        delete this._wasm_val;
        dtor(wasm_val);
      }
    }
  
    class RbAbiValue {
      constructor(wasm_val, obj) {
        this._wasm_val = wasm_val;
        this._obj = obj;
        this._refcnt = 1;
        obj._registry1.register(this, wasm_val, this);
      }
      
      clone() {
        this._refcnt += 1;
        return this;
      }
      
      drop() {
        this._refcnt -= 1;
        if (this._refcnt !== 0)
        return;
        this._obj._registry1.unregister(this);
        const dtor = this._obj._exports['canonical_abi_drop_rb-abi-value'];
        const wasm_val = this._wasm_val;
        delete this._obj;
        delete this._refcnt;
        delete this._wasm_val;
        dtor(wasm_val);
      }
    }
  
    function addRbJsAbiHostToImports(imports, obj, get_export) {
      if (!("rb-js-abi-host" in imports)) imports["rb-js-abi-host"] = {};
      imports["rb-js-abi-host"]["eval-js: func(code: string) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }"] = function(arg0, arg1, arg2) {
        const memory = get_export("memory");
        const ptr0 = arg0;
        const len0 = arg1;
        const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
        const ret0 = obj.evalJs(result0);
        const variant1 = ret0;
        switch (variant1.tag) {
          case "success": {
            const e = variant1.val;
            data_view(memory).setInt8(arg2 + 0, 0, true);
            data_view(memory).setInt32(arg2 + 4, resources0.insert(e), true);
            break;
          }
          case "failure": {
            const e = variant1.val;
            data_view(memory).setInt8(arg2 + 0, 1, true);
            data_view(memory).setInt32(arg2 + 4, resources0.insert(e), true);
            break;
          }
          default:
          throw new RangeError("invalid variant specified for JsAbiResult");
        }
      };
      imports["rb-js-abi-host"]["is-js: func(value: handle<js-abi-value>) -> bool"] = function(arg0) {
        const ret0 = obj.isJs(resources0.get(arg0));
        return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["instance-of: func(value: handle<js-abi-value>, klass: handle<js-abi-value>) -> bool"] = function(arg0, arg1) {
        const ret0 = obj.instanceOf(resources0.get(arg0), resources0.get(arg1));
        return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["global-this: func() -> handle<js-abi-value>"] = function() {
        const ret0 = obj.globalThis();
        return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["int-to-js-number: func(value: s32) -> handle<js-abi-value>"] = function(arg0) {
        const ret0 = obj.intToJsNumber(arg0);
        return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["float-to-js-number: func(value: float64) -> handle<js-abi-value>"] = function(arg0) {
        const ret0 = obj.floatToJsNumber(arg0);
        return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["string-to-js-string: func(value: string) -> handle<js-abi-value>"] = function(arg0, arg1) {
        const memory = get_export("memory");
        const ptr0 = arg0;
        const len0 = arg1;
        const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
        const ret0 = obj.stringToJsString(result0);
        return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["bool-to-js-bool: func(value: bool) -> handle<js-abi-value>"] = function(arg0) {
        const bool0 = arg0;
        const ret0 = obj.boolToJsBool(bool0 == 0 ? false : (bool0 == 1 ? true : throw_invalid_bool()));
        return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["proc-to-js-function: func(value: u32) -> handle<js-abi-value>"] = function(arg0) {
        const ret0 = obj.procToJsFunction(arg0 >>> 0);
        return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["rb-object-to-js-rb-value: func(raw-rb-abi-value: u32) -> handle<js-abi-value>"] = function(arg0) {
        const ret0 = obj.rbObjectToJsRbValue(arg0 >>> 0);
        return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["js-value-to-string: func(value: handle<js-abi-value>) -> string"] = function(arg0, arg1) {
        const memory = get_export("memory");
        const realloc = get_export("cabi_realloc");
        const ret0 = obj.jsValueToString(resources0.get(arg0));
        const ptr0 = utf8_encode(ret0, realloc, memory);
        const len0 = UTF8_ENCODED_LEN;
        data_view(memory).setInt32(arg1 + 4, len0, true);
        data_view(memory).setInt32(arg1 + 0, ptr0, true);
      };
      imports["rb-js-abi-host"]["js-value-to-integer: func(value: handle<js-abi-value>) -> variant { f64(float64), bignum(string) }"] = function(arg0, arg1) {
        const memory = get_export("memory");
        const realloc = get_export("cabi_realloc");
        const ret0 = obj.jsValueToInteger(resources0.get(arg0));
        const variant1 = ret0;
        switch (variant1.tag) {
          case "f64": {
            const e = variant1.val;
            data_view(memory).setInt8(arg1 + 0, 0, true);
            data_view(memory).setFloat64(arg1 + 8, +e, true);
            break;
          }
          case "bignum": {
            const e = variant1.val;
            data_view(memory).setInt8(arg1 + 0, 1, true);
            const ptr0 = utf8_encode(e, realloc, memory);
            const len0 = UTF8_ENCODED_LEN;
            data_view(memory).setInt32(arg1 + 12, len0, true);
            data_view(memory).setInt32(arg1 + 8, ptr0, true);
            break;
          }
          default:
          throw new RangeError("invalid variant specified for RawInteger");
        }
      };
      imports["rb-js-abi-host"]["export-js-value-to-host: func(value: handle<js-abi-value>) -> ()"] = function(arg0) {
        obj.exportJsValueToHost(resources0.get(arg0));
      };
      imports["rb-js-abi-host"]["import-js-value-from-host: func() -> handle<js-abi-value>"] = function() {
        const ret0 = obj.importJsValueFromHost();
        return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["js-value-typeof: func(value: handle<js-abi-value>) -> string"] = function(arg0, arg1) {
        const memory = get_export("memory");
        const realloc = get_export("cabi_realloc");
        const ret0 = obj.jsValueTypeof(resources0.get(arg0));
        const ptr0 = utf8_encode(ret0, realloc, memory);
        const len0 = UTF8_ENCODED_LEN;
        data_view(memory).setInt32(arg1 + 4, len0, true);
        data_view(memory).setInt32(arg1 + 0, ptr0, true);
      };
      imports["rb-js-abi-host"]["js-value-equal: func(lhs: handle<js-abi-value>, rhs: handle<js-abi-value>) -> bool"] = function(arg0, arg1) {
        const ret0 = obj.jsValueEqual(resources0.get(arg0), resources0.get(arg1));
        return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["js-value-strictly-equal: func(lhs: handle<js-abi-value>, rhs: handle<js-abi-value>) -> bool"] = function(arg0, arg1) {
        const ret0 = obj.jsValueStrictlyEqual(resources0.get(arg0), resources0.get(arg1));
        return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["reflect-apply: func(target: handle<js-abi-value>, this-argument: handle<js-abi-value>, arguments: list<handle<js-abi-value>>) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }"] = function(arg0, arg1, arg2, arg3, arg4) {
        const memory = get_export("memory");
        const len0 = arg3;
        const base0 = arg2;
        const result0 = [];
        for (let i = 0; i < len0; i++) {
          const base = base0 + i * 4;
          result0.push(resources0.get(data_view(memory).getInt32(base + 0, true)));
        }
        const ret0 = obj.reflectApply(resources0.get(arg0), resources0.get(arg1), result0);
        const variant1 = ret0;
        switch (variant1.tag) {
          case "success": {
            const e = variant1.val;
            data_view(memory).setInt8(arg4 + 0, 0, true);
            data_view(memory).setInt32(arg4 + 4, resources0.insert(e), true);
            break;
          }
          case "failure": {
            const e = variant1.val;
            data_view(memory).setInt8(arg4 + 0, 1, true);
            data_view(memory).setInt32(arg4 + 4, resources0.insert(e), true);
            break;
          }
          default:
          throw new RangeError("invalid variant specified for JsAbiResult");
        }
      };
      imports["rb-js-abi-host"]["reflect-construct: func(target: handle<js-abi-value>, arguments: list<handle<js-abi-value>>) -> handle<js-abi-value>"] = function(arg0, arg1, arg2) {
        const memory = get_export("memory");
        const len0 = arg2;
        const base0 = arg1;
        const result0 = [];
        for (let i = 0; i < len0; i++) {
          const base = base0 + i * 4;
          result0.push(resources0.get(data_view(memory).getInt32(base + 0, true)));
        }
        const ret0 = obj.reflectConstruct(resources0.get(arg0), result0);
        return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["reflect-delete-property: func(target: handle<js-abi-value>, property-key: string) -> bool"] = function(arg0, arg1, arg2) {
        const memory = get_export("memory");
        const ptr0 = arg1;
        const len0 = arg2;
        const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
        const ret0 = obj.reflectDeleteProperty(resources0.get(arg0), result0);
        return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["reflect-get: func(target: handle<js-abi-value>, property-key: string) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }"] = function(arg0, arg1, arg2, arg3) {
        const memory = get_export("memory");
        const ptr0 = arg1;
        const len0 = arg2;
        const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
        const ret0 = obj.reflectGet(resources0.get(arg0), result0);
        const variant1 = ret0;
        switch (variant1.tag) {
          case "success": {
            const e = variant1.val;
            data_view(memory).setInt8(arg3 + 0, 0, true);
            data_view(memory).setInt32(arg3 + 4, resources0.insert(e), true);
            break;
          }
          case "failure": {
            const e = variant1.val;
            data_view(memory).setInt8(arg3 + 0, 1, true);
            data_view(memory).setInt32(arg3 + 4, resources0.insert(e), true);
            break;
          }
          default:
          throw new RangeError("invalid variant specified for JsAbiResult");
        }
      };
      imports["rb-js-abi-host"]["reflect-get-own-property-descriptor: func(target: handle<js-abi-value>, property-key: string) -> handle<js-abi-value>"] = function(arg0, arg1, arg2) {
        const memory = get_export("memory");
        const ptr0 = arg1;
        const len0 = arg2;
        const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
        const ret0 = obj.reflectGetOwnPropertyDescriptor(resources0.get(arg0), result0);
        return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["reflect-get-prototype-of: func(target: handle<js-abi-value>) -> handle<js-abi-value>"] = function(arg0) {
        const ret0 = obj.reflectGetPrototypeOf(resources0.get(arg0));
        return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["reflect-has: func(target: handle<js-abi-value>, property-key: string) -> bool"] = function(arg0, arg1, arg2) {
        const memory = get_export("memory");
        const ptr0 = arg1;
        const len0 = arg2;
        const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
        const ret0 = obj.reflectHas(resources0.get(arg0), result0);
        return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["reflect-is-extensible: func(target: handle<js-abi-value>) -> bool"] = function(arg0) {
        const ret0 = obj.reflectIsExtensible(resources0.get(arg0));
        return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["reflect-own-keys: func(target: handle<js-abi-value>) -> list<handle<js-abi-value>>"] = function(arg0, arg1) {
        const memory = get_export("memory");
        const realloc = get_export("cabi_realloc");
        const ret0 = obj.reflectOwnKeys(resources0.get(arg0));
        const vec0 = ret0;
        const len0 = vec0.length;
        const result0 = realloc(0, 0, 4, len0 * 4);
        for (let i = 0; i < vec0.length; i++) {
          const e = vec0[i];
          const base = result0 + i * 4;
          data_view(memory).setInt32(base + 0, resources0.insert(e), true);
        }
        data_view(memory).setInt32(arg1 + 4, len0, true);
        data_view(memory).setInt32(arg1 + 0, result0, true);
      };
      imports["rb-js-abi-host"]["reflect-prevent-extensions: func(target: handle<js-abi-value>) -> bool"] = function(arg0) {
        const ret0 = obj.reflectPreventExtensions(resources0.get(arg0));
        return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["reflect-set: func(target: handle<js-abi-value>, property-key: string, value: handle<js-abi-value>) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }"] = function(arg0, arg1, arg2, arg3, arg4) {
        const memory = get_export("memory");
        const ptr0 = arg1;
        const len0 = arg2;
        const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
        const ret0 = obj.reflectSet(resources0.get(arg0), result0, resources0.get(arg3));
        const variant1 = ret0;
        switch (variant1.tag) {
          case "success": {
            const e = variant1.val;
            data_view(memory).setInt8(arg4 + 0, 0, true);
            data_view(memory).setInt32(arg4 + 4, resources0.insert(e), true);
            break;
          }
          case "failure": {
            const e = variant1.val;
            data_view(memory).setInt8(arg4 + 0, 1, true);
            data_view(memory).setInt32(arg4 + 4, resources0.insert(e), true);
            break;
          }
          default:
          throw new RangeError("invalid variant specified for JsAbiResult");
        }
      };
      imports["rb-js-abi-host"]["reflect-set-prototype-of: func(target: handle<js-abi-value>, prototype: handle<js-abi-value>) -> bool"] = function(arg0, arg1) {
        const ret0 = obj.reflectSetPrototypeOf(resources0.get(arg0), resources0.get(arg1));
        return ret0 ? 1 : 0;
      };
      if (!("canonical_abi" in imports)) imports["canonical_abi"] = {};
      
      const resources0 = new Slab();
      imports.canonical_abi["resource_drop_js-abi-value"] = (i) => {
        const val = resources0.remove(i);
        if (obj.dropJsAbiValue)
        obj.dropJsAbiValue(val);
      };
    }
  
    /**
     * A Ruby VM instance
     *
     * @example
     *
     * const wasi = new WASI();
     * const vm = new RubyVM();
     * const imports = {
     *   wasi_snapshot_preview1: wasi.wasiImport,
     * };
     *
     * vm.addToImports(imports);
     *
     * const instance = await WebAssembly.instantiate(rubyModule, imports);
     * await vm.setInstance(instance);
     * wasi.initialize(instance);
     * vm.initialize();
     *
     */
    class RubyVM {
        constructor() {
            this.instance = null;
            this.interfaceState = {
                hasJSFrameAfterRbFrame: false,
            };
            // Wrap exported functions from Ruby VM to prohibit nested VM operation
            // if the call stack has sandwitched JS frames like JS -> Ruby -> JS -> Ruby.
            const proxyExports = (exports) => {
                const excludedMethods = [
                    "addToImports",
                    "instantiate",
                    "rbSetShouldProhibitRewind",
                    "rbGcDisable",
                    "rbGcEnable",
                ];
                const excluded = ["constructor"].concat(excludedMethods);
                // wrap all methods in RbAbi.RbAbiGuest class
                for (const key of Object.getOwnPropertyNames(RbAbiGuest.prototype)) {
                    if (excluded.includes(key)) {
                        continue;
                    }
                    const value = exports[key];
                    if (typeof value === "function") {
                        exports[key] = (...args) => {
                            const isNestedVMCall = this.interfaceState.hasJSFrameAfterRbFrame;
                            if (isNestedVMCall) {
                                const oldShouldProhibitRewind = this.guest.rbSetShouldProhibitRewind(true);
                                const oldIsDisabledGc = this.guest.rbGcDisable();
                                const result = Reflect.apply(value, exports, args);
                                this.guest.rbSetShouldProhibitRewind(oldShouldProhibitRewind);
                                if (!oldIsDisabledGc) {
                                    this.guest.rbGcEnable();
                                }
                                return result;
                            }
                            else {
                                return Reflect.apply(value, exports, args);
                            }
                        };
                    }
                }
                return exports;
            };
            this.guest = proxyExports(new RbAbiGuest());
            this.transport = new JsValueTransport();
            this.exceptionFormatter = new RbExceptionFormatter();
        }
        /**
         * Initialize the Ruby VM with the given command line arguments
         * @param args The command line arguments to pass to Ruby. Must be
         * an array of strings starting with the Ruby program name.
         */
        initialize(args = ["ruby.wasm", "--disable-gems", "-EUTF-8", "-e_=0"]) {
            const c_args = args.map((arg) => arg + "\0");
            this.guest.rubyInit();
            this.guest.rubySysinit(c_args);
            this.guest.rubyOptions(c_args);
        }
        /**
         * Set a given instance to interact JavaScript and Ruby's
         * WebAssembly instance. This method must be called before calling
         * Ruby API.
         *
         * @param instance The WebAssembly instance to interact with. Must
         * be instantiated from a Ruby built with JS extension, and built
         * with Reactor ABI instead of command line.
         */
        async setInstance(instance) {
            this.instance = instance;
            await this.guest.instantiate(instance);
        }
        /**
         * Add intrinsic import entries, which is necessary to interact JavaScript
         * and Ruby's WebAssembly instance.
         * @param imports The import object to add to the WebAssembly instance
         */
        addToImports(imports) {
            this.guest.addToImports(imports);
            function wrapTry(f) {
                return (...args) => {
                    try {
                        return { tag: "success", val: f(...args) };
                    }
                    catch (e) {
                        if (e instanceof RbFatalError) {
                            // RbFatalError should not be caught by Ruby because it Ruby VM
                            // can be already in an inconsistent state.
                            throw e;
                        }
                        return { tag: "failure", val: e };
                    }
                };
            }
            imports["rb-js-abi-host"] = {
                rb_wasm_throw_prohibit_rewind_exception: (messagePtr, messageLen) => {
                    const memory = this.instance.exports.memory;
                    const str = new TextDecoder().decode(new Uint8Array(memory.buffer, messagePtr, messageLen));
                    throw new RbFatalError("Ruby APIs that may rewind the VM stack are prohibited under nested VM operation " +
                        `(${str})\n` +
                        "Nested VM operation means that the call stack has sandwitched JS frames like JS -> Ruby -> JS -> Ruby " +
                        "caused by something like `window.rubyVM.eval(\"JS.global[:rubyVM].eval('Fiber.yield')\")`\n" +
                        "\n" +
                        "Please check your call stack and make sure that you are **not** doing any of the following inside the nested Ruby frame:\n" +
                        "  1. Switching fibers (e.g. Fiber#resume, Fiber.yield, and Fiber#transfer)\n" +
                        "     Note that `evalAsync` JS API switches fibers internally\n" +
                        "  2. Raising uncaught exceptions\n" +
                        "     Please catch all exceptions inside the nested operation\n" +
                        "  3. Calling Continuation APIs\n");
                },
            };
            // NOTE: The GC may collect objects that are still referenced by Wasm
            // locals because Asyncify cannot scan the Wasm stack above the JS frame.
            // So we need to keep track whether the JS frame is sandwitched by Ruby
            // frames or not, and prohibit nested VM operation if it is.
            const proxyImports = (imports) => {
                for (const [key, value] of Object.entries(imports)) {
                    if (typeof value === "function") {
                        imports[key] = (...args) => {
                            const oldValue = this.interfaceState.hasJSFrameAfterRbFrame;
                            this.interfaceState.hasJSFrameAfterRbFrame = true;
                            const result = Reflect.apply(value, imports, args);
                            this.interfaceState.hasJSFrameAfterRbFrame = oldValue;
                            return result;
                        };
                    }
                }
                return imports;
            };
            addRbJsAbiHostToImports(imports, proxyImports({
                evalJs: wrapTry((code) => {
                    return Function(code)();
                }),
                isJs: (value) => {
                    // Just for compatibility with the old JS API
                    return true;
                },
                globalThis: () => {
                    if (typeof globalThis !== "undefined") {
                        return globalThis;
                    }
                    else if (typeof global !== "undefined") {
                        return global;
                    }
                    else if (typeof window !== "undefined") {
                        return window;
                    }
                    throw new Error("unable to locate global object");
                },
                intToJsNumber: (value) => {
                    return value;
                },
                floatToJsNumber: (value) => {
                    return value;
                },
                stringToJsString: (value) => {
                    return value;
                },
                boolToJsBool: (value) => {
                    return value;
                },
                procToJsFunction: (rawRbAbiValue) => {
                    const rbValue = this.rbValueOfPointer(rawRbAbiValue);
                    return (...args) => {
                        rbValue.call("call", ...args.map((arg) => this.wrap(arg)));
                    };
                },
                rbObjectToJsRbValue: (rawRbAbiValue) => {
                    return this.rbValueOfPointer(rawRbAbiValue);
                },
                jsValueToString: (value) => {
                    // According to the [spec](https://tc39.es/ecma262/multipage/text-processing.html#sec-string-constructor-string-value)
                    // `String(value)` always returns a string.
                    return String(value);
                },
                jsValueToInteger(value) {
                    if (typeof value === "number") {
                        return { tag: "f64", val: value };
                    }
                    else if (typeof value === "bigint") {
                        return { tag: "bignum", val: BigInt(value).toString(10) + "\0" };
                    }
                    else if (typeof value === "string") {
                        return { tag: "bignum", val: value + "\0" };
                    }
                    else if (typeof value === "undefined") {
                        return { tag: "f64", val: 0 };
                    }
                    else {
                        return { tag: "f64", val: Number(value) };
                    }
                },
                exportJsValueToHost: (value) => {
                    // See `JsValueExporter` for the reason why we need to do this
                    this.transport.takeJsValue(value);
                },
                importJsValueFromHost: () => {
                    return this.transport.consumeJsValue();
                },
                instanceOf: (value, klass) => {
                    if (typeof klass === "function") {
                        return value instanceof klass;
                    }
                    else {
                        return false;
                    }
                },
                jsValueTypeof(value) {
                    return typeof value;
                },
                jsValueEqual(lhs, rhs) {
                    return lhs == rhs;
                },
                jsValueStrictlyEqual(lhs, rhs) {
                    return lhs === rhs;
                },
                reflectApply: wrapTry((target, thisArgument, args) => {
                    return Reflect.apply(target, thisArgument, args);
                }),
                reflectConstruct: function (target, args) {
                    throw new Error("Function not implemented.");
                },
                reflectDeleteProperty: function (target, propertyKey) {
                    throw new Error("Function not implemented.");
                },
                reflectGet: wrapTry((target, propertyKey) => {
                    return target[propertyKey];
                }),
                reflectGetOwnPropertyDescriptor: function (target, propertyKey) {
                    throw new Error("Function not implemented.");
                },
                reflectGetPrototypeOf: function (target) {
                    throw new Error("Function not implemented.");
                },
                reflectHas: function (target, propertyKey) {
                    throw new Error("Function not implemented.");
                },
                reflectIsExtensible: function (target) {
                    throw new Error("Function not implemented.");
                },
                reflectOwnKeys: function (target) {
                    throw new Error("Function not implemented.");
                },
                reflectPreventExtensions: function (target) {
                    throw new Error("Function not implemented.");
                },
                reflectSet: wrapTry((target, propertyKey, value) => {
                    return Reflect.set(target, propertyKey, value);
                }),
                reflectSetPrototypeOf: function (target, prototype) {
                    throw new Error("Function not implemented.");
                },
            }), (name) => {
                return this.instance.exports[name];
            });
        }
        /**
         * Print the Ruby version to stdout
         */
        printVersion() {
            this.guest.rubyShowVersion();
        }
        /**
         * Runs a string of Ruby code from JavaScript
         * @param code The Ruby code to run
         * @returns the result of the last expression
         *
         * @example
         * vm.eval("puts 'hello world'");
         * const result = vm.eval("1 + 2");
         * console.log(result.toString()); // 3
         *
         */
        eval(code) {
            return evalRbCode(this, this.privateObject(), code);
        }
        /**
         * Runs a string of Ruby code with top-level `JS::Object#await`
         * Returns a promise that resolves when execution completes.
         * @param code The Ruby code to run
         * @returns a promise that resolves to the result of the last expression
         *
         * @example
         * const text = await vm.evalAsync(`
         *   require 'js'
         *   response = JS.global.fetch('https://example.com').await
         *   response.text.await
         * `);
         * console.log(text.toString()); // <html>...</html>
         */
        evalAsync(code) {
            const JS = this.eval("require 'js'; JS");
            return new Promise((resolve, reject) => {
                JS.call("__eval_async_rb", this.wrap(code), this.wrap({
                    resolve,
                    reject: (error) => {
                        reject(new RbError(this.exceptionFormatter.format(error, this, this.privateObject())));
                    },
                }));
            });
        }
        /**
         * Wrap a JavaScript value into a Ruby JS::Object
         * @param value The value to convert to RbValue
         * @returns the RbValue object representing the given JS value
         *
         * @example
         * const hash = vm.eval(`Hash.new`)
         * hash.call("store", vm.eval(`"key1"`), vm.wrap(new Object()));
         */
        wrap(value) {
            return this.transport.importJsValue(value, this);
        }
        privateObject() {
            return {
                transport: this.transport,
                exceptionFormatter: this.exceptionFormatter,
            };
        }
        rbValueOfPointer(pointer) {
            const abiValue = new RbAbiValue(pointer, this.guest);
            return new RbValue(abiValue, this, this.privateObject());
        }
    }
    /**
     * Export a JS value held by the Ruby VM to the JS environment.
     * This is implemented in a dirty way since wit cannot reference resources
     * defined in other interfaces.
     * In our case, we can't express `function(v: rb-abi-value) -> js-abi-value`
     * because `rb-js-abi-host.wit`, that defines `js-abi-value`, is implemented
     * by embedder side (JS) but `rb-abi-guest.wit`, that defines `rb-abi-value`
     * is implemented by guest side (Wasm).
     *
     * This class is a helper to export by:
     * 1. Call `function __export_to_js(v: rb-abi-value)` defined in guest from embedder side.
     * 2. Call `function takeJsValue(v: js-abi-value)` defined in embedder from guest side with
     *    underlying JS value of given `rb-abi-value`.
     * 3. Then `takeJsValue` implementation escapes the given JS value to the `_takenJsValues`
     *    stored in embedder side.
     * 4. Finally, embedder side can take `_takenJsValues`.
     *
     * Note that `exportJsValue` is not reentrant.
     *
     * @private
     */
    class JsValueTransport {
        constructor() {
            this._takenJsValue = null;
        }
        takeJsValue(value) {
            this._takenJsValue = value;
        }
        consumeJsValue() {
            return this._takenJsValue;
        }
        exportJsValue(value) {
            value.call("__export_to_js");
            return this._takenJsValue;
        }
        importJsValue(value, vm) {
            this._takenJsValue = value;
            return vm.eval('require "js"; JS::Object').call("__import_from_js");
        }
    }
    /**
     * A RbValue is an object that represents a value in Ruby
     */
    class RbValue {
        /**
         * @hideconstructor
         */
        constructor(inner, vm, privateObject) {
            this.inner = inner;
            this.vm = vm;
            this.privateObject = privateObject;
        }
        /**
         * Call a given method with given arguments
         *
         * @param callee name of the Ruby method to call
         * @param args arguments to pass to the method. Must be an array of RbValue
         *
         * @example
         * const ary = vm.eval("[1, 2, 3]");
         * ary.call("push", 4);
         * console.log(ary.call("sample").toString());
         *
         */
        call(callee, ...args) {
            const innerArgs = args.map((arg) => arg.inner);
            return new RbValue(callRbMethod(this.vm, this.privateObject, this.inner, callee, innerArgs), this.vm, this.privateObject);
        }
        /**
         * @see {@link https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive}
         * @param hint Preferred type of the result primitive value. `"number"`, `"string"`, or `"default"`.
         */
        [Symbol.toPrimitive](hint) {
            if (hint === "string" || hint === "default") {
                return this.toString();
            }
            else if (hint === "number") {
                return null;
            }
            return null;
        }
        /**
         * Returns a string representation of the value by calling `to_s`
         */
        toString() {
            const rbString = callRbMethod(this.vm, this.privateObject, this.inner, "to_s", []);
            return this.vm.guest.rstringPtr(rbString);
        }
        /**
         * Returns a JavaScript object representation of the value
         * by calling `to_js`.
         *
         * Returns null if the value is not convertible to a JavaScript object.
         */
        toJS() {
            const JS = this.vm.eval("JS");
            const jsValue = JS.call("try_convert", this);
            if (jsValue.call("nil?").toString() === "true") {
                return null;
            }
            return this.privateObject.transport.exportJsValue(jsValue);
        }
    }
    var ruby_tag_type;
    (function (ruby_tag_type) {
        ruby_tag_type[ruby_tag_type["None"] = 0] = "None";
        ruby_tag_type[ruby_tag_type["Return"] = 1] = "Return";
        ruby_tag_type[ruby_tag_type["Break"] = 2] = "Break";
        ruby_tag_type[ruby_tag_type["Next"] = 3] = "Next";
        ruby_tag_type[ruby_tag_type["Retry"] = 4] = "Retry";
        ruby_tag_type[ruby_tag_type["Redo"] = 5] = "Redo";
        ruby_tag_type[ruby_tag_type["Raise"] = 6] = "Raise";
        ruby_tag_type[ruby_tag_type["Throw"] = 7] = "Throw";
        ruby_tag_type[ruby_tag_type["Fatal"] = 8] = "Fatal";
        ruby_tag_type[ruby_tag_type["Mask"] = 15] = "Mask";
    })(ruby_tag_type || (ruby_tag_type = {}));
    class RbExceptionFormatter {
        constructor() {
            this.literalsCache = null;
        }
        format(error, vm, privateObject) {
            const [zeroLiteral, oneLiteral, newLineLiteral] = (() => {
                if (this.literalsCache == null) {
                    const zeroOneNewLine = [
                        evalRbCode(vm, privateObject, "0"),
                        evalRbCode(vm, privateObject, "1"),
                        evalRbCode(vm, privateObject, `"\n"`),
                    ];
                    this.literalsCache = zeroOneNewLine;
                    return zeroOneNewLine;
                }
                else {
                    return this.literalsCache;
                }
            })();
            const backtrace = error.call("backtrace");
            if (backtrace.call("nil?").toString() === "true") {
                return this.formatString(error.call("class").toString(), error.toString());
            }
            const firstLine = backtrace.call("at", zeroLiteral);
            const restLines = backtrace
                .call("drop", oneLiteral)
                .call("join", newLineLiteral);
            return this.formatString(error.call("class").toString(), error.toString(), [
                firstLine.toString(),
                restLines.toString(),
            ]);
        }
        formatString(klass, message, backtrace) {
            if (backtrace) {
                return `${backtrace[0]}: ${message} (${klass})\n${backtrace[1]}`;
            }
            else {
                return `${klass}: ${message}`;
            }
        }
    }
    const checkStatusTag = (rawTag, vm, privateObject) => {
        switch (rawTag & ruby_tag_type.Mask) {
            case ruby_tag_type.None:
                break;
            case ruby_tag_type.Return:
                throw new RbError("unexpected return");
            case ruby_tag_type.Next:
                throw new RbError("unexpected next");
            case ruby_tag_type.Break:
                throw new RbError("unexpected break");
            case ruby_tag_type.Redo:
                throw new RbError("unexpected redo");
            case ruby_tag_type.Retry:
                throw new RbError("retry outside of rescue clause");
            case ruby_tag_type.Throw:
                throw new RbError("unexpected throw");
            case ruby_tag_type.Raise:
            case ruby_tag_type.Fatal:
                const error = new RbValue(vm.guest.rbErrinfo(), vm, privateObject);
                if (error.call("nil?").toString() === "true") {
                    throw new RbError("no exception object");
                }
                // clear errinfo if got exception due to no rb_jump_tag
                vm.guest.rbClearErrinfo();
                throw new RbError(privateObject.exceptionFormatter.format(error, vm, privateObject));
            default:
                throw new RbError(`unknown error tag: ${rawTag}`);
        }
    };
    function wrapRbOperation(vm, body) {
        try {
            return body();
        }
        catch (e) {
            if (e instanceof RbError) {
                throw e;
            }
            // All JS exceptions triggered by Ruby code are translated to Ruby exceptions,
            // so non-RbError exceptions are unexpected.
            vm.guest.rbVmBugreport();
            if (e instanceof WebAssembly.RuntimeError && e.message === "unreachable") {
                const error = new RbError(`Something went wrong in Ruby VM: ${e}`);
                error.stack = e.stack;
                throw error;
            }
            else {
                throw e;
            }
        }
    }
    const callRbMethod = (vm, privateObject, recv, callee, args) => {
        const mid = vm.guest.rbIntern(callee + "\0");
        return wrapRbOperation(vm, () => {
            const [value, status] = vm.guest.rbFuncallvProtect(recv, mid, args);
            checkStatusTag(status, vm, privateObject);
            return value;
        });
    };
    const evalRbCode = (vm, privateObject, code) => {
        return wrapRbOperation(vm, () => {
            const [value, status] = vm.guest.rbEvalStringProtect(code + "\0");
            checkStatusTag(status, vm, privateObject);
            return new RbValue(value, vm, privateObject);
        });
    };
    /**
     * Error class thrown by Ruby execution
     */
    class RbError extends Error {
        /**
         * @hideconstructor
         */
        constructor(message) {
            super(message);
        }
    }
    /**
     * Error class thrown by Ruby execution when it is not possible to recover.
     * This is usually caused when Ruby VM is in an inconsistent state.
     */
    class RbFatalError extends RbError {
        /**
         * @hideconstructor
         */
        constructor(message) {
            super("Ruby Fatal Error: " + message);
        }
    }
  
    const consolePrinter = () => {
        let memory = undefined;
        let view = undefined;
        const decoder = new TextDecoder();
        return {
            addToImports(imports) {
                const original = imports.wasi_snapshot_preview1.fd_write;
                imports.wasi_snapshot_preview1.fd_write = (fd, iovs, iovsLen, nwritten) => {
                    if (fd !== 1 && fd !== 2) {
                        return original(fd, iovs, iovsLen, nwritten);
                    }
                    if (typeof memory === "undefined" || typeof view === "undefined") {
                        throw new Error("Memory is not set");
                    }
                    if (view.buffer.byteLength === 0) {
                        view = new DataView(memory.buffer);
                    }
                    const buffers = Array.from({ length: iovsLen }, (_, i) => {
                        const ptr = iovs + i * 8;
                        const buf = view.getUint32(ptr, true);
                        const bufLen = view.getUint32(ptr + 4, true);
                        return new Uint8Array(memory.buffer, buf, bufLen);
                    });
                    let written = 0;
                    let str = "";
                    for (const buffer of buffers) {
                        str += decoder.decode(buffer);
                        written += buffer.byteLength;
                    }
                    view.setUint32(nwritten, written, true);
                    const log = fd === 1 ? console.log : console.warn;
                    log(str);
                    return 0;
                };
            },
            setMemory(m) {
                memory = m;
                view = new DataView(m.buffer);
            },
        };
    };
    const DefaultRubyVM = async (rubyModule, options = { consolePrint: true }) => {
        await n();
        const wasi = new s({
            env: {
                // FIXME(katei): setjmp consumes a LOT of stack now, so we extend
                // default Fiber stack size as well as main stack size allocated
                // by wasm-ld's --stack-size. The ideal solution is to reduce
                // stack consumption in setjmp.
                "RUBY_FIBER_MACHINE_STACK_SIZE": "16777216"
            }
        });
        const vm = new RubyVM();
        const imports = wasi.getImports(rubyModule);
        vm.addToImports(imports);
        const printer = options.consolePrint ? consolePrinter() : undefined;
        printer === null || printer === void 0 ? void 0 : printer.addToImports(imports);
        const instance = await WebAssembly.instantiate(rubyModule, imports);
        wasi.instantiate(instance);
        await vm.setInstance(instance);
        printer === null || printer === void 0 ? void 0 : printer.setMemory(instance.exports.memory);
        // Manually call `_initialize`, which is a part of reactor model ABI,
        // because the WASI polyfill doesn't support it yet.
        instance.exports._initialize();
        vm.initialize();
        return {
            vm,
            wasi,
            instance,
        };
    };
  
    const main$1 = async (pkg) => {
//       const response = await fetch(`https://cdn.jsdelivr.net/npm/${pkg.name}@${pkg.version}/dist/ruby+stdlib.wasm`);
        const response = await fetch(`../../rubywasm/ruby.wasm`);
        console.log(response)
        const buffer = await response.arrayBuffer();
        const module = await WebAssembly.compile(buffer);
        const { vm } = await DefaultRubyVM(module);
        vm.printVersion();
        globalThis.rubyVM = vm;
        // Wait for the text/ruby script tag to be read.
        // It may take some time to read ruby+stdlib.wasm
        // and DOMContentLoaded has already been fired.
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => runRubyScriptsInHtml(vm));
        }
        else {
            runRubyScriptsInHtml(vm);
        }
    };
    const runRubyScriptsInHtml = async (vm) => {
        var _a, e_1, _b, _c;
        const tags = document.querySelectorAll('script[type="text/ruby"]');
        // Get Ruby scripts in parallel.
        const promisingRubyScripts = Array.from(tags).map((tag) => loadScriptAsync(tag));
        try {
            // Run Ruby scripts sequentially.
            for (var _d = true, promisingRubyScripts_1 = __asyncValues(promisingRubyScripts), promisingRubyScripts_1_1; promisingRubyScripts_1_1 = await promisingRubyScripts_1.next(), _a = promisingRubyScripts_1_1.done, !_a; _d = true) {
                _c = promisingRubyScripts_1_1.value;
                _d = false;
                const script = _c;
                if (script) {
                    const { scriptContent, evalStyle } = script;
                    switch (evalStyle) {
                        case "async":
                            vm.evalAsync(scriptContent);
                            break;
                        case "sync":
                            vm.eval(scriptContent);
                            break;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = promisingRubyScripts_1.return)) await _b.call(promisingRubyScripts_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    const deriveEvalStyle = (tag) => {
        const rawEvalStyle = tag.getAttribute("data-eval") || "sync";
        if (rawEvalStyle !== "async" && rawEvalStyle !== "sync") {
            console.warn(`data-eval attribute of script tag must be "async" or "sync". ${rawEvalStyle} is ignored and "sync" is used instead.`);
            return "sync";
        }
        return rawEvalStyle;
    };
    const loadScriptAsync = async (tag) => {
        const evalStyle = deriveEvalStyle(tag);
        // Inline comments can be written with the src attribute of the script tag.
        // The presence of the src attribute is checked before the presence of the inline.
        // see: https://html.spec.whatwg.org/multipage/scripting.html#inline-documentation-for-external-scripts
        if (tag.hasAttribute("src")) {
            const url = tag.getAttribute("src");
            const response = await fetch(url);
            if (response.ok) {
                return { scriptContent: await response.text(), evalStyle };
            }
            return Promise.resolve(null);
        }
        return Promise.resolve({ scriptContent: tag.innerHTML, evalStyle });
    };
  
    var name = "ruby-3_2-wasm-wasi";
    var version = "2.1.0";
    var description = "Ruby 3.2 built on WASI";
    var main = "./dist/index.cjs.js";
    var module$1 = "./dist/index.esm.js";
    var typings = "./dist/index.d.ts";
    var exports$1 = {
        ".": {
            browser: "./dist/index.esm.js",
            umd: "./dist/index.umd.js",
            "import": "./dist/index.esm.js",
            require: "./dist/index.cjs.js",
            types: "./dist/browser.d.ts"
        },
        "./dist/browser": {
            browser: "./dist/browser.esm.js",
            umd: "./dist/browser.umd.js",
            "import": "./dist/browser.esm.js",
            require: "./dist/browser.cjs.js",
            types: "./dist/browser.d.ts"
        },
        "./dist/browser.script": {
            browser: "./dist/browser.script.esm.js",
            umd: "./dist/browser.script.umd.js",
            "import": "./dist/browser.script.esm.js",
            types: "./dist/browser.script.d.ts"
        },
        "./dist/node": {
            "import": "./dist/node.esm.js",
            require: "./dist/node.cjs.js",
            types: "./dist/node.d.ts"
        }
    };
    var files = [
        "dist",
        "README.md"
    ];
    var scripts = {
        test: "RUBY_NPM_PACKAGE_ROOT=../ruby-3_2-wasm-wasi npm -C ../ruby-wasm-wasi run test:run",
        "build:deps": "cd ../ruby-wasm-wasi && npm run build",
        "build:static:files": "../ruby-wasm-wasi/tools/pack-static-files.sh ./dist",
        "build:static:compat": "../ruby-wasm-wasi/tools/pack-compat-shim.mjs --dist=./dist --pkg=ruby-3_2-wasm-wasi",
        "build:static": "npm run build:static:files && npm run build:static:compat",
        "build:wasm": "../ruby-wasm-wasi/tools/pack-ruby-wasm.sh ../../../rubies/3_2-wasm32-unknown-wasi-full-js-debug ./dist",
        "build:rollup": "rollup -c rollup.config.mjs",
        build: "npm run build:deps && npm run build:static && npm run build:wasm && npm run build:rollup"
    };
    var repository = "https://github.com/ruby/ruby.wasm";
    var homepage = "https://github.com/ruby/ruby.wasm/tree/main/packages/npm-packages/ruby-3_2-wasm-wasi";
    var publishConfig = {
        access: "public"
    };
    var keywords = [
        "wasm",
        "webassembly",
        "wasi",
        "ruby"
    ];
    var license = "MIT";
    var devDependencies = {
        "@rollup/plugin-json": "^6.0.0",
        rollup: "^3.2.2"
    };
    var dependencies = {
        "@ruby/wasm-wasi": "^2.0.0"
    };
    var _package = {
        name: name,
        version: version,
        description: description,
        main: main,
        "umd:main": "./dist/index.umd.js",
        module: module$1,
        typings: typings,
        exports: exports$1,
        files: files,
        scripts: scripts,
        repository: repository,
        homepage: homepage,
        publishConfig: publishConfig,
        keywords: keywords,
        license: license,
        devDependencies: devDependencies,
        dependencies: dependencies
    };
  
    var pkg = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _package,
      dependencies: dependencies,
      description: description,
      devDependencies: devDependencies,
      exports: exports$1,
      files: files,
      homepage: homepage,
      keywords: keywords,
      license: license,
      main: main,
      module: module$1,
      name: name,
      publishConfig: publishConfig,
      repository: repository,
      scripts: scripts,
      typings: typings,
      version: version
    });
  
    main$1(pkg);
  
  })();